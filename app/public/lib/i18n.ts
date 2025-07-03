import { promises as fs } from 'fs';
import path from 'path';

export async function getTranslations(locale: string) {
  const filePath = path.join(process.cwd(), `public/locales/${locale}/common.json`);
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}