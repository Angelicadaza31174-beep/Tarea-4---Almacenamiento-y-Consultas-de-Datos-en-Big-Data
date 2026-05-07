// ===============================================
// TAREA 4 - INSERTAR 100 PRODUCTOS
// Big Data 202016911_83 - UNAD 2025
// ===============================================

use ecommerce_unad;
db.productos.drop();

print("Insertando 100 productos...");

for (let i = 1; i <= 100; i++) {
  db.productos.insertOne({
    nombre: `Producto ${i} - ${i % 2 === 0 ? "Premium" : "Básico"}`,
    categoria: ["Electrónica","Ropa","Hogar","Deportes","Juguetes"][Math.floor(Math.random()*5)],
    precio: Math.floor(Math.random() * 450000) + 25000,
    descuento: Math.floor(Math.random() * 25),
    stock: Math.floor(Math.random() * 300),
    marca: ["Samsung","Nike","Sony","Apple","Adidas","Lenovo","Puma"][Math.floor(Math.random()*7)],
    variantes: [
      {
        talla: ["S","M","L","XL"][Math.floor(Math.random()*4)],
        color: ["Negro","Blanco","Azul","Rojo","Gris"][Math.floor(Math.random()*5)],
        stock: Math.floor(Math.random()*80) + 10
      },
      {
        talla: ["S","M","L","XL"][Math.floor(Math.random()*4)],
        color: ["Negro","Blanco","Azul","Rojo","Gris"][Math.floor(Math.random()*5)],
        stock: Math.floor(Math.random()*80) + 10
      }
    ],
    rating_promedio: Number((Math.random() * 1.5 + 3.5).toFixed(2)),
    reseñas: [
      {
        usuario: `User${i}`,
        puntuacion: Math.floor(Math.random()*2)+4,
        comentario: ["Excelente","Muy bueno","Recomendado","Me encanta"][Math.floor(Math.random()*4)],
        fecha: "2025-11-" + String(i%28+1).padStart(2,'0')
      }
    ],
    ventas_totales: Math.floor(Math.random() * 800),
    fecha_creacion: new Date()
  });
}

print("¡100 productos insertados correctamente!");
print("Total: " + db.productos.countDocuments({}));