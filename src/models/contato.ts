class Contato {
  id: string
  nome: string
  apelido: string
  foto?: string
  email: string
  telefone: number
  sobre: string

  constructor(
    nome: string,
    apelido: string,
    email: string,
    telefone: number,
    sobre: string,
    id: string,
    foto?: string
  ) {
    this.id = id
    this.nome = nome
    this.apelido = apelido
    this.foto = foto
    this.email = email
    this.telefone = telefone
    this.sobre = sobre
  }
}

export default Contato
