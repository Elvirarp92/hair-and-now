module.exports = [
  (refs) => ({
    model: () => require('./../../models/pack.model'),
    refName: 'packs',
    entities: [
      {
        refName: 'barber1tendencia',
        data: {
          salon: refs.salons.firstBarbershop._id,
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
          salon: refs.salons.firstBarbershop._id,
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
          salon: refs.salons.firstBarbershop._id,
          services: [refs.services.afeitadoNavaja._id],
          price: 19,
        },
      },
      {
        refName: 'barber1barba',
        data: {
          salon: refs.salons.firstBarbershop._id,
          services: [refs.services.arregloBarba._id],
          price: 15.5,
        },
      },
      {
        refName: 'barber1clasicoybarba',
        data: {
          salon: refs.salons.firstBarbershop._id,
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
          salon: refs.salons.firstBarbershop._id,
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
          salon: refs.salons.firstSalon._id,
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
          salon: refs.salons.firstSalon._id,
          services: [refs.services.lavado._id, refs.services.recogido._id],
          price: 35,
        },
      },
      {
        refName: 'salon1tinte',
        data: {
          salon: refs.salons.firstSalon._id,
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
          salon: refs.salons.firstSalon._id,
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
          salon: refs.salons.firstSalon._id,
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
          salon: refs.salons.firstSalon._id,
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
          salon: refs.salons.secondSalon._id,
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
          salon: refs.salons.secondSalon._id,
          services: [refs.services.lavado._id, refs.services.recogido._id],
          price: 35,
        },
      },
      {
        refName: 'salon2tinte',
        data: {
          salon: refs.salons.secondSalon._id,
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
          salon: refs.salons.secondSalon._id,
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
          salon: refs.salons.secondSalon._id,
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
          salon: refs.salons.secondSalon._id,
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
