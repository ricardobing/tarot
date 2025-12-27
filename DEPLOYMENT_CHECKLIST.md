# 🚀 CHECKLIST DE DEPLOYMENT

## Pre-Launch Checklist

### Configuración Básica
- [x] Personalizar datos de contacto en `config/site.ts`
- [ ] Agregar número real de WhatsApp
- [ ] Agregar email real de contacto
- [ ] Configurar redes sociales (Instagram, Facebook)

### Contenido
- [ ] Reemplazar imagen placeholder de la profesional
- [ ] Agregar imágenes reales de cartas de tarot
- [ ] Revisar todos los textos y personalizarlos
- [ ] Verificar precios y tipos de consultas
- [ ] Completar artículos del blog faltantes

### SEO
- [ ] Cambiar `siteConfig.url` a tu dominio final
- [x] Verificar meta descriptions (máx 160 caracteres)
- [x] Comprobar que todos los H1 son únicos
- [ ] Agregar Google Analytics
- [ ] Configurar Google Search Console
- [ ] Generar y subir `og-image.jpg` (1200x630px)

### Performance
- [x] Optimizar imágenes a formato WebP
- [x] Verificar lazy loading
- [x] Comprobar que no hay console.logs
- [ ] Test en Lighthouse (score 90+)
- [ ] Test en PageSpeed Insights

### Funcionalidad
- [x] Probar todos los botones de WhatsApp
- [x] Verificar links internos
- [ ] Test en dispositivos móviles reales
- [ ] Test en diferentes navegadores (Chrome, Firefox, Safari)
- [x] Verificar formularios de contacto
- [x] Comprobar smooth scroll

### Legal
- [ ] Agregar Política de Privacidad real
- [ ] Agregar Términos y Condiciones
- [ ] Verificar disclaimer legal del footer

## Deployment Steps

### 1. Preparar Repositorio
```bash
cd C:\tmp\tarot
git init
git add .
git commit -m "Initial commit: Tarot Professional landing page"
```

### 2. Subir a GitHub
```bash
git remote add origin https://github.com/ricardobing/tarot.git
git branch -M main
git push -u origin main
```

### 3. Deploy en Vercel
- Ir a https://vercel.com
- Click "New Project"
- Import `ricardobing/tarot`
- Dejar configuración por defecto
- Deploy

### 4. Configurar Dominio (opcional)
- En Vercel > Settings > Domains
- Agregar dominio custom
- Configurar DNS según instrucciones

## Post-Launch Checklist

### Verificación
- [ ] Sitio accesible en URL de Vercel
- [ ] Todas las páginas cargan correctamente
- [ ] WhatsApp links funcionan en mobile
- [ ] Imágenes se ven bien
- [ ] Blog accesible

### Monitoreo
- [ ] Configurar Google Analytics
- [ ] Configurar Facebook Pixel (opcional)
- [ ] Setup de Google Search Console
- [ ] Monitoreo de uptime

### Marketing
- [ ] Compartir en redes sociales
- [ ] Agregar link a Instagram bio
- [ ] Actualizar material impreso con nueva URL
- [ ] Enviar a clientes actuales

## Maintenance

### Semanal
- [ ] Revisar mensajes de WhatsApp
- [ ] Monitorear Analytics
- [ ] Responder comentarios del blog

### Mensual
- [ ] Publicar 1-2 artículos nuevos
- [ ] Actualizar precios si cambian
- [ ] Revisar y responder reseñas
- [ ] Backup del sitio

### Trimestral
- [ ] Actualizar testimonios
- [ ] Refrescar imágenes
- [ ] Revisar keywords y SEO
- [ ] Actualizar FAQ con nuevas preguntas

---

**Fecha de lanzamiento planeada:** _______________
**Responsable:** _______________
