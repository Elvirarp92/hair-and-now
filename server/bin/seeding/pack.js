module.exports = [
  (refs) => ({
    model: () => require('./../../models/pack.model'),
    refName: 'packs',
    entities: [
      {
        refName: 'barber1tendencia',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.corteTendenciaCab._id,
            refs.services.peinadoCab._id,
          ],
          price: 19.5,
        },
      },
      {
        refName: 'barber1clasico',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.corteClasicoCab._id,
            refs.services.peinadoCab._id,
          ],
          price: 17.5,
        },
      },
      {
        refName: 'barber1afeitado',
        data: {
          services: [refs.services.afeitadoNavaja._id],
          price: 19,
        },
      },
      {
        refName: 'barber1barba',
        data: {
          services: [refs.services.arregloBarba._id],
          price: 15.5,
        },
      },
      {
        refName: 'barber1clasicoybarba',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.corteClasicoCab._id,
            refs.services.peinadoCab._id,
            refs.services.arregloBarba._id,
          ],
          price: 34.5,
        },
      },
      {
        refName: 'barber1clasicoyafeitado',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.corteClasicoCab._id,
            refs.services.peinadoCab._id,
            refs.services.afeitadoNavaja._id,
          ],
          price: 39.5,
        },
      },
      {
        refName: 'salon1corteypeinado',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.corteSra._id,
            refs.services.peinadoSra._id,
          ],
          price: 25,
        },
      },
      {
        refName: 'salon1recogido',
        data: {
          services: [refs.services.lavado._id, refs.services.recogido._id],
          price: 35,
        },
      },
      {
        refName: 'salon1tinte',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.tinteSra._id,
            refs.services.peinadoSra._id,
          ],
          price: 49,
        },
      },
      {
        refName: 'salon1corteytinte',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.corteSra._id,
            refs.services.tinteSra._id,
            refs.services.peinadoSra._id,
          ],
          price: 58,
        },
      },
      {
        refName: 'salon1mechas',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.mechasSra._id,
            refs.services.peinadoSra._id,
          ],
          price: 56,
        },
      },
      {
        refName: 'salon1corteymechas',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.corteSra._id,
            refs.services.mechasSra._id,
            refs.services.peinadoSra._id,
          ],
          price: 65,
        },
      },
      {
        refName: 'salon2corteypeinado',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.corteSra._id,
            refs.services.peinadoSra._id,
          ],
          price: 25,
        },
      },
      {
        refName: 'salon2recogido',
        data: {
          services: [refs.services.lavado._id, refs.services.recogido._id],
          price: 35,
        },
      },
      {
        refName: 'salon2tinte',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.tinteSra._id,
            refs.services.peinadoSra._id,
          ],
          price: 49,
        },
      },
      {
        refName: 'salon2corteytinte',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.corteSra._id,
            refs.services.tinteSra._id,
            refs.services.peinadoSra._id,
          ],
          price: 58,
        },
      },
      {
        refName: 'salon2mechas',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.mechasSra._id,
            refs.services.peinadoSra._id,
          ],
          price: 56,
        },
      },
      {
        refName: 'salon2corteymechas',
        data: {
          services: [
            refs.services.lavado._id,
            refs.services.corteSra._id,
            refs.services.mechasSra._id,
            refs.services.peinadoSra._id,
          ],
          price: 65,
        },
      },
    ],
  }),
]
