export function formatDate(dateInput: string | Date | number | null | undefined): string {
  if (!dateInput) return ''

  // If it's already a Date, format directly as DD/MM/YYYY
  if (dateInput instanceof Date) {
    const day = String(dateInput.getDate()).padStart(2, '0')
    const month = String(dateInput.getMonth() + 1).padStart(2, '0')
    const year = dateInput.getFullYear()
    return `${day}/${month}/${year}`
  }

  const dateString = String(dateInput)

  // Handle DD/MM/YYYY or DD-MM-YYYY or ISO-like formats
  const separator = dateString.includes('/') ? '/' : (dateString.includes('-') ? '-' : null)
  
  if (separator && dateString.split(separator).length === 3) {
    const parts = dateString.split(separator)
    // Check if it's YYYY-MM-DD or YYYY/MM/DD (first part is 4 digits)
    if (parts[0].length === 4) {
      const [year, month, day] = parts
      return `${day}/${month}/${year}`
    } else if (parseInt(parts[0], 10) > 12) {
      // DD-MM-YYYY or DD/MM/YYYY format
      const [day, month, year] = parts
      return `${day}/${month}/${year}`
    } else {
      // MM-DD-YYYY or MM/DD/YYYY format (fallback)
      const [month, day, year] = parts
      return `${day}/${month}/${year}`
    }
  }
  
  // Fallback: use Date parsing
  const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    return dateString
  }
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}





