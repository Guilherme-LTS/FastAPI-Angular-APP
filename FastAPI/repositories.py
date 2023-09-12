from sqlalchemy.orm import Session

from models import Product

class ProductRepository:
    @staticmethod
    def find_all(db: Session) -> list[Product]:
        return db.query(Product).all()

    @staticmethod
    def save(db: Session, product: Product) -> Product:
        if product.id:
            db.merge(product)
        else:
            db.add(product)
        db.commit()
        return product

    @staticmethod
    def find_by_id(db: Session, id: int) -> Product:
        return db.query(Product).filter(Product.id == id).first()

    @staticmethod
    def exists_by_id(db: Session, id: int) -> bool:
        return db.query(Product).filter(Product.id == id).first() is not None

    @staticmethod
    def delete_by_id(db: Session, id: int) -> None:
        product = db.query(Product).filter(Product.id == id).first()
        if product is not None:
            db.delete(product)
            db.commit()
