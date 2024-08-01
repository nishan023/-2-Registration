import fs from 'fs'
import path from 'path'

// Function to load HTML template
export const loadTemplate = (templateName: string): string => {
    const filePath = path.resolve(
        __dirname,
        '../email-templates',
        `${templateName}.html`
    )
    return fs.readFileSync(filePath, 'utf-8')
}
