export function formatDate(dateString: string): string {
  // Handle DD-MM-YYYY format
  if (dateString.includes('-') && dateString.split('-').length === 3) {
    const parts = dateString.split('-')
    // Check if it's DD-MM-YYYY (first part is > 12) or YYYY-MM-DD (first part is 4 digits)
    if (parts[0].length === 4) {
      // YYYY-MM-DD format
      const [year, month, day] = parts
      return `${day}/${month}/${year}`
    } else if (parseInt(parts[0]) > 12) {
      // DD-MM-YYYY format
      const [day, month, year] = parts
      return `${day}/${month}/${year}`
    } else {
      // MM-DD-YYYY format (assuming)
      const [month, day, year] = parts
      return `${day}/${month}/${year}`
    }
  }
  
  // Handle standard Date parsing for other formats
  const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    // If date is invalid, return original string or handle error
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





