
import pandas as pd

# Ler os dados do arquivo vendas.xlsx
data = pd.read_excel("vendas.xlsx")

# Criar a nova coluna "Total"
data["Total"] = data["Quantidade"] * data["Preço Unitário"]

# Gerar o relatório
# Total geral de vendas
total_vendas = data["Total"].sum()

# Produto mais vendido
produto_mais_vendido = data.groupby("Produto")["Quantidade"].sum().idxmax()

# Dia com mais vendas
data["Data"] = pd.to_datetime(data["Data"], format="%d/%m/%Y")
dia_maior_venda = data.groupby("Data")["Total"].sum().idxmax()

# Criar o resumo
resumo = pd.DataFrame({
    "Métrica": ["Total Geral de Vendas", "Produto Mais Vendido", "Dia de Maior Venda"],
    "Valor": [total_vendas, produto_mais_vendido, dia_maior_venda.strftime("%d/%m/%Y")]
})

# Passo 4: Salvar os resultados no arquivo relatorio_vendas.xlsx
with pd.ExcelWriter("relatorio_vendas.xlsx") as writer:
    resumo.to_excel(writer, sheet_name="resumo", index=False)
    data.to_excel(writer, sheet_name="vendas_com_totais", index=False)

# Exibir os resultados no terminal
print("Resumo do Relatório:")
print(resumo)
print("\nArquivo 'relatorio_vendas.xlsx' gerado com sucesso!")