const puntosTOS = [
    { t: "1. Política Estricta de No Reembolso", d: "Debido a la naturaleza digital de nuestros productos, todas las ventas son finales. Sin excepciones: una vez entregado o iniciado el servicio, no hay devoluciones." },
    { t: "2. Categorías de Productos y Servicios", d: "Incluye configuración de Bots, Packs de Música, Logos y Scripts/Ropa de FiveM. No nos responsabilizamos de cambios en APIs externas." },
    { t: "3. Soporte Técnico", d: "Incluye soporte estrictamente para la instalación básica por 30 días. No incluye modificaciones personalizadas del código." },
    { t: "4. Responsabilidad del Cliente", d: "El cliente debe verificar requisitos técnicos, proporcionar datos correctos y mantener sus propias copias de seguridad." },
    { t: "5. Garantía de Funcionamiento y Pruebas", d: "Todo ha sido testeado en entornos reales. No nos hacemos responsables si el cliente modifica el código base." },
    { t: "6. Alojamiento (Hosting) de Bots", d: "Se rige por el plan contratado. Se dan 24h de gracia tras el vencimiento antes del apagado permanente." },
    { t: "7. Responsabilidad Legal y Uso Malicioso", d: "El cliente es el único responsable legal del uso del software. Actividades ilícitas causarán terminación inmediata." },
    { t: "8. Derecho de Admisión y Modificación", d: "Nos reservamos el derecho de rechazar servicios a usuarios tóxicos y de actualizar estos términos en cualquier momento." },
    { t: "9. Actualizaciones de Scripts", d: "La compra incluye la versión actual. Actualizaciones futuras pueden ser de pago según el criterio del desarrollador." },
    { t: "10. Prohibición de Leaks y Reventa", d: "Si se detecta filtración o reventa, se procederá al baneo inmediato de toda la red y revocación de licencias." },
    { t: "11. Limitación de Responsabilidad", d: "No nos hacemos responsables de pérdidas económicas o baneos en plataformas externas (Discord/FiveM)." },
    { t: "12. Tiempo de Entrega y Customs", d: "Productos automáticos son inmediatos. Los personalizados tienen plazos estimados. Incluyen 2 revisiones gratuitas." },
    { t: "13. Abuso del Soporte", d: "No se dará soporte ante faltas de respeto. El soporte es para errores, no para clases de programación." },
    { t: "14. Verificación de Identidad", d: "Nos reservamos el derecho de solicitar pruebas de pago ante transacciones sospechosas para prevenir fraude." },
    { t: "15. Inactividad de Tickets", d: "Tickets sin respuesta por 48h serán cerrados. Reclamaciones válidas solo dentro de los primeros 15 días." },
    { t: "16. Modificaciones por Terceros", d: "Cualquier manipulación del código por personal ajeno a nuestro equipo anula la garantía y el soporte." },
    { t: "17. Disponibilidad del Servicio (Uptime)", d: "No nos responsabilizamos de caídas por mantenimientos programados o fallos en centros de datos externos." },
    { t: "18. Logs y Privacidad", d: "Aceptas la generación de registros de actividad para mejorar el servicio. Tus datos no serán vendidos." },
    { t: "19. Jurisdicción y Prueba Digital", d: "La interacción con el bot de tickets actúa como una firma digital vinculante y aceptación de términos." },
    { t: "20. Requisitos de Escrow (CFX)", d: "El cliente es responsable de proporcionar la cuenta de Keymaster correcta. No hay cambios por errores de vinculación." },
    { t: "21. Política de Chargeback Preventiva", d: "Contracargos fraudulentos resultarán en el reporte de tus datos a listas negras (Blacklists) de la comunidad." },
    { t: "22. Errores de Precio o Stock", d: "Podemos cancelar órdenes con precios erróneos por fallos técnicos, ofreciendo crédito en tienda o pago de diferencia." },
    { t: "23. Prohibición de Ingeniería Inversa", d: "Queda prohibido descompilar o intentar descifrar los métodos de seguridad de nuestros productos." },
    { t: "24. Fuerza Mayor", d: "No respondemos por fallos causados por caídas globales de Discord, CFX.re o problemas de red nacional." },
    { t: "25. Pagos Externos (Amigos y Familiares)", d: "Al elegir esta modalidad, confirmas la recepción satisfactoria por anticipado y renuncias a disputas." },
    { t: "26. Requisitos de Mayoría de Edad", d: "Declaras tener capacidad legal o permiso de tutores. No se reembolsan compras accidentales de menores." },
    { t: "27. Acceso a Descargas", d: "Enlaces válidos por 7 días. La re-emisión posterior puede conllevar una tasa administrativa." },
    { t: "28. Modificaciones de Plataformas Base", d: "No somos responsables si cambios en la API de Discord o FiveM dejan obsoleto el producto." },
    { t: "29. Acuerdo de Confidencialidad", d: "Prohibido filtrar capturas o conversaciones privadas del soporte con el fin de dañar nuestra imagen." },
    { t: "30. Cláusula de Sentido Común", d: "La administración interpretará situaciones no previstas. El sabotaje al servidor conlleva baneo inmediato." },
    { t: "31. Compras para Terceros", d: "La licencia pertenece al destinatario final. No intervenimos en conflictos personales entre usuarios." },
    { t: "32. Obsolescencia", d: "No se garantiza soporte para productos descatalogados en versiones de software extremadamente nuevas." },
    { t: "33. Prohibición de Coacción", d: "Amenazar con reseñas negativas para obtener extras resultará en la cancelación total del servicio." },
    { t: "34. Idioma Oficial", d: "Toda comunicación y soporte se realiza en Español para evitar errores de interpretación." }
];

const container = document.getElementById('tos-content');

puntosTOS.forEach(punto => {
    const div = document.createElement('div');
    div.className = 'tos-point';
    div.innerHTML = `<h4>${punto.t}</h4><p>${punto.d}</p>`;
    container.appendChild(div);
});
