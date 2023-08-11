import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import { NextResponse } from 'next/server'

export async function GET(Request) {
    const directory = path.join(process.cwd(), 'csvdata');
    const fileContents = await fs.readFileSync(directory + '/data.csv', 'utf8');
    const parsedData = Papa.parse(fileContents, { header: true });
    return NextResponse.json(parsedData.data);
}