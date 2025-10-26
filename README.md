# 🌱 Galería Verde - Trabajo Práctico Obligatorio

**Sitio web informativo para local comercial de plantas y decoración**

## 📋 Información del Proyecto

**Local:** Galería Verde - Plantas y Decoración  
**Ubicación:** Local 15, Galería Central, Av. Corrientes 1234  
**Público objetivo:** Personas interesadas en plantas de interior y decoración natural  
**Tipo de negocio:** Venta de plantas, suculentas y elementos decorativos  

---

## 🎯 Estructura del Sitio

### Páginas Implementadas
1. **index.html (Inicio)** - Página principal con bienvenida y características destacadas
2. **nosotros.html (Nosotros)** - Historia completa y valores del local dentro de la galería
3. **productos.html (Productos)** - Catálogo completo con 9 productos variados
4. **promociones.html (Promociones)** - Sistema interactivo de cálculo de descuentos y ofertas
5. **contacto.html (Contacto)** - Información completa: dirección, teléfono, email, redes sociales y mapa integrado

### Navegación
- Menú fijo superior con enlaces entre páginas
- Sistema de navegación multipágina (no single page)
- Menú hamburguesa para dispositivos móviles
- Footer con enlaces rápidos en todas las páginas

---

## 🎨 Identidad Visual

### Logo y Marca
- **Nombre:** Galería Verde
- **Logo:** Imagen circular de planta natural que representa el negocio

### Paleta de Colores
- **Verde principal:** `#2e7d32` (naturaleza, frescura)
- **Verde oscuro:** `#1b5e20` (elegancia, confianza)  
- **Blanco:** `#ffffff` (limpieza, minimalismo)
- **Gris claro:** `#f5f5f5` (neutralidad, contraste)

### Tipografía
- **Fuente principal:** Poppins (Google Fonts)
- **Pesos utilizados:** 300, 400, 500, 600, 700
- **Características:** Moderna, legible, profesional

---

## 💻 Aspectos Técnicos

### Tecnologías Utilizadas
- **HTML5** semántico con elementos `<header>`, `<nav>`, `<section>`, `<footer>`
- **CSS3** puro sin frameworks externos
- **JavaScript** vanilla para interactividad y cálculos dinámicos
- **Flexbox** para el layout y distribución de elementos
- **CSS Grid** para la grilla de productos
- **Media Queries** para diseño responsivo

### Características del Diseño
- ✅ **Responsivo:** Adaptación automática a móvil, tablet y desktop
- ✅ **Semántico:** HTML estructurado para SEO y accesibilidad
- ✅ **Performance:** Imágenes optimizadas desde Unsplash
- ✅ **Interactivo:** Efectos hover y transiciones suaves
- ✅ **Navegación:** Menú sticky con navegación multipágina
- ✅ **Imágenes reales:** Fotografías profesionales de plantas y productos

### Breakpoints Responsivos
- **Desktop:** > 768px
- **Tablet:** 481px - 768px  
- **Mobile:** ≤ 480px

---

## 📁 Estructura de Archivos
```
tpo-dweb/
├── index.html        # Página de inicio
├── nosotros.html     # Página "Nosotros"
├── productos.html    # Catálogo de productos
├── promociones.html  # Sistema de promociones
├── contacto.html     # Información de contacto
├── style.css         # Estilos CSS
├── promociones.js    # Lógica JavaScript para promociones
└── README.md         # Documentación del proyecto
```

**Nota:** Las imágenes se cargan desde Unsplash para mayor profesionalismo y calidad.

---

## 🛠️ Justificación del Diseño

### ¿Por qué estos colores?
- **Verde (#2e7d32):** Representa la naturaleza y crecimiento de las plantas
- **Verde oscuro (#1b5e20):** Aporta elegancia y confianza al negocio  
- **Blanco y grises:** Crean un ambiente limpio y minimalista que resalta las plantas

### ¿Por qué Poppins?
- Tipografía moderna y legible en todos los dispositivos
- Transmite profesionalismo y cercanía
- Excelente legibilidad para información de productos

### ¿Por qué este estilo?
- **Minimalista:** Las plantas son las protagonistas
- **Natural:** Colores y formas que evocan la naturaleza
- **Profesional:** Genera confianza para compras online

---

## 📱 Diseño Responsivo

El sitio se adapta a tres breakpoints principales:

### 💻 Desktop (> 768px)
- Layout completo con sidebar de navegación
- Imágenes grandes para mostrar detalle de productos
- Grid de 3 columnas para productos

### 📱 Tablet (481-768px)  
- Layout adaptado con elementos más compactos
- Grid de 2 columnas para productos
- Menú colapsado

### 📱 Mobile (≤ 480px)
- Stack vertical de todos los elementos
- Menú hamburguesa
- Grid de 1 columna para productos
- Botones touch-friendly (44px mínimo)

---

## 🎁 Sistema de Promociones Interactivo

### Funcionalidad Principal
La página **promociones.html** incluye un sistema dinámico de cálculo de descuentos que permite a los usuarios:
- Seleccionar entre 3 tipos de promociones diferentes
- Elegir productos del catálogo
- Especificar cantidades
- Calcular automáticamente el ahorro en tiempo real

### Promociones Disponibles

#### 1. **2x1 con 50% OFF**
- Descripción: Al comprar 2 productos, obtiene 50% de descuento en el de menor precio
- Lógica: Por cada par de productos, se descuenta el 50% del más barato
- Ejemplo: Monstera ($3,500) + Pothos ($2,200) = Descuento $1,100 en el Pothos

#### 2. **3x2 Especial**
- Descripción: Compra 3 productos y paga solo 2
- Lógica: Por cada 3 productos, el de menor precio sale gratis
- Ejemplo: 3 productos → el más barato es gratis

#### 3. **Descuento por Volumen**
- Descripción: 10% de descuento en compras superiores a $30,000
- Lógica: Si el subtotal > $30,000, se aplica 10% de descuento sobre el total
- Ejemplo: Compra de $35,000 → Descuento de $3,500

### Arquitectura Técnica

#### HTML (promociones.html)
- Formulario semántico con validación
- Selectores de productos con checkboxes
- Inputs numéricos para cantidades
- Sección de resultados dinámica

#### JavaScript (promociones.js)
**Funciones Principales:**
- `obtenerProductosSeleccionados()` - Recopila productos y cantidades del formulario
- `calcular2x1()` - Implementa lógica de descuento 2x1
- `calcular3x2()` - Implementa lógica de descuento 3x2
- `calcularVolumen()` - Implementa descuento por volumen
- `mostrarResultados()` - Renderiza los cálculos en pantalla
- `formatearPrecio()` - Formatea números con separadores de miles

**Características del Código:**
- Código modular y reutilizable
- Validación de datos en tiempo real
- Algoritmos de ordenamiento para optimizar descuentos
- Event listeners para interactividad
- Manejo de estados (habilitar/deshabilitar campos)

#### CSS (style.css)
- Estilos específicos para la calculadora de promociones
- Tarjetas de promociones con efectos hover
- Diseño de formulario optimizado
- Sección de resultados con gradientes
- Responsive design para todos los dispositivos

### Flujo de Usuario
1. Usuario accede a "Promociones" desde el menú
2. Lee las 3 promociones disponibles
3. Selecciona el tipo de promoción deseada
4. Marca checkboxes de productos a comprar
5. Ingresa cantidades (se habilitan automáticamente)
6. Presiona "Calcular Ahorro"
7. El sistema muestra:
   - Subtotal sin descuento
   - Descuento aplicado
   - Total a pagar
   - Mensaje de ahorro personalizado

### Validaciones Implementadas
- ✅ Promoción seleccionada obligatoria
- ✅ Al menos un producto seleccionado
- ✅ Cantidades mínimas según promoción
- ✅ Mensajes informativos si no se cumplen requisitos
- ✅ Botón "Limpiar" para resetear el formulario

---
