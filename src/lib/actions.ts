"use server";

import { z } from "zod";
import { wizardSchema, type WizardSchemaType } from "./schemas";
import { generateLeadId } from "./utils";
import fs from "fs/promises";
import path from "path";
import os from "os";

// We'll store leads in a local JSON file for the mock backend
// In a real app with Prisma, this would write to PostgreSQL
const LEADS_FILE = path.join(os.tmpdir(), 'umme-abiha-leads.json');

export async function submitLead(data: WizardSchemaType) {
  try {
    // 1. Validate data
    const validatedData = wizardSchema.parse(data);
    
    // 2. Generate unique reference ID
    const referenceId = generateLeadId();
    
    // 3. Create full lead object
    const newLead = {
      id: crypto.randomUUID(),
      referenceId,
      createdAt: new Date().toISOString(),
      status: "new",
      ...validatedData,
      source: "wizard" as const,
    };

    // 4. Save to mock database (JSON file)
    let leads = [];
    try {
      const fileData = await fs.readFile(LEADS_FILE, 'utf-8');
      leads = JSON.parse(fileData);
    } catch (e) {
      // File doesn't exist yet, which is fine
    }
    
    leads.push(newLead);
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));

    // Emails will be handled by the client to bypass Cloudflare
    
    return { success: true, id: referenceId };
  } catch (error) {
    console.error("Error submitting lead:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed. Please check your inputs." };
    }
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function submitContactForm(data: any) {
  try {
    const { contactFormSchema } = await import("./schemas");
    const validatedData = contactFormSchema.parse(data);
    
    // Emails will be handled by the client to bypass Cloudflare
    
    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed. Please check your inputs." };
    }
    return { success: false, error: "An unexpected error occurred." };
  }
}
