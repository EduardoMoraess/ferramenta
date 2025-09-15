import secrets
import string

def gerar_senha_numerica():
    nome = input("Digite seu nome: ").strip()
    # Conta apenas letras
    tamanho = sum(1 for letra in nome if letra.isalpha())

    if tamanho < 1:
        print("Nome inválido! Vou usar senha de 3 números como padrão.")
        tamanho = 3

    # Gera senha apenas com números aleatórios
    senha = ''.join(secrets.choice(string.digits) for _ in range(tamanho))
    return senha

if __name__ == "__main__":
    senha_gerada = gerar_senha_numerica()
    print("Senha gerada:", senha_gerada)
