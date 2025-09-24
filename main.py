import secrets
import string

def gerar_senha_numericas():
    nome = input("Digite seu nome =>")

    tamanho = sum(1 for letra in nome if letra.isalpha())

    if tamanho < 1 :
        print('Nome invalido!')
    
    senha = ''.join(secrets.choice(string.digits) for _ in range(tamanho))
    return senha
if __name__ == "__main__":
    senha_gerada = gerar_senha_numericas()
    print("Senha gerada:", senha_gerada)