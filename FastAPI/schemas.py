from pydantic import BaseModel

class ProductBase(BaseModel):
    descricao: str
    valor: float
    categoria: str
    estoque: int

class ProductRequest(ProductBase):
    ...

class ProductResponse(ProductBase):
    id: int

    class Config:
        from_attributes = True
