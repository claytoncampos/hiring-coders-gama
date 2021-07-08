interface Usuario {
  nome: string;
  email: string;
  address?: string;
}

function getUser(): Usuario {
  return {
    nome: 'Clay',
    email: 'clay@uol.com',
  };
}

function setUser(usuario: Usuario) {}
