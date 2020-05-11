module.exports = [
  () => ({
    model: () => require('./../../models/service.model'),
    refName: 'services',
    entities: [
      { refName: 'lavado', data: { name: 'Lavado', estimatedTime: 15 } },
      {
        refName: 'peinado',
        data: { name: 'Peinado', estimatedTime: 20 },
      },
      {
        refName: 'corteClasicoCab',
        data: { name: 'Corte clásico caballero', estimatedTime: 30 },
      },
      {
        refName: 'corteTendenciaCab',
        data: {
          name: 'Corte tendencia caballero',
          estimatedTime: 60,
        },
      },
      {
        refName: 'arregloBarba',
        data: { name: 'Arreglo barba', estimatedTime: 20 },
      },
      {
        refName: 'afeitadoNavaja',
        data: { name: 'Afeitado a navaja', estimatedTime: 90 },
      },
      {
        refName: 'peinadoSra',
        data: { name: 'Peinado', estimatedTime: 20 },
      },
      {
        refName: 'recogido',
        data: { name: 'Recogido', estimatedTime: 60 },
      },
      {
        refName: 'corteSra',
        data: { name: 'Corte señora', estimatedTime: 30 },
      },
      {
        refName: 'tinteSra',
        data: { name: 'Tinte señora', estimatedTime: 90 },
      },
      {
        refName: 'mechasSra',
        data: { name: 'Mechas señora', estimatedTime: 60 },
      },
    ],
  }),
]
