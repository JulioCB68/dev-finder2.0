export function formatDate(dataString: string) {
  const date = new Date(dataString)
  return date.toLocaleDateString('pt-BR')
}
