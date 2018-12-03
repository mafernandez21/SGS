const config={
  "app":{
    "port":3003,
    "maxrestime":10000,
    "minrestime":1000
  },
  "clientes":[
    {
      IdCliente: 1,
      Numero: 001,
      Nombre: 'Martín',
      Apellido: 'Fernández',
      Dominio: 'AC239OM',
      Polizas: []
    },
    {
      IdCliente: 2,
      Numero: 002,
      Nombre: 'Alejandro',
      Apellido: 'Fernández',
      Dominio: 'DAJ961',
      Polizas: []
    },
    {
      IdCliente: 3,
      Numero: 003,
      Nombre: 'Emilia',
      Apellido: 'Salomón',
      Dominio: 'WFX801',
      Polizas: []
    }
  ],
};

module.exports = config;


/*
Cliente{
  IdCliente: number
  Numero: number
  Nombre: string
  Apellido: string
  Dominio: string, Regxp ([a-z | A-Z]){2}([0-9]){3}([a-z | A-Z]){2}|([a-z | A-Z]){3}([0-9]){3}
  Polizas: array(Polizas)
}

Polizas{
  IdPoliza: number
  Numero: string
  FechaInicioVigencia: DateTime
  FechaFinVigencia: DateTime
  Pagos: array(Pagos)
}

Pago{
  IdPago: number
  Monto: Currency
  Cupon: string
  NumeroPago: number
  FechaPago: DateTime
  FechaUpdate: DateTime
}
*/
