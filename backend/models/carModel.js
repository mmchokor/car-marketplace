const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
   url: {
      type: String,
   },
   filename: {
      type: String,
   },
})

const carSchema = mongoose.Schema(
   {
      user: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User',
      },
      carName: {
         type: String,
         required: [true, 'Please select a product'],
      },
      description: {
         type: String,
         required: [true, 'Please add a description'],
      },
      price: {
         type: Number,
         required: [true, 'Please add a price'],
      },
      condition: {
         type: String,
         required: true,
         enum: ['new', 'used'],
         default: 'new',
      },
      location: {
         type: String,
         required: true,
      },
      latitude: {
         type: Number,
         required: [true, 'Please add a latitude'],
      },
      longitude: {
         type: Number,
         required: [true, 'Please add a longitude'],
      },
      bodyType: {
         type: String,
         required: true,
         enum: [
            'sedan',
            'hatchback',
            'suv',
            'coupe',
            'convertible',
            'pickup',
            'van',
            'other',
         ],
         default: 'sedan',
      },
      brand: {
         type: String,
         required: true,
         enum: [
            'Abarth',
            'Alfa Romeo',
            'Aston Martin',
            'Audi',
            'Bentley',
            'BMW',
            'Bugatti',
            'Cadillac',
            'Chevrolet',
            'Chrysler',
            'Citroën',
            'Dacia',
            'Daewoo',
            'Daihatsu',
            'Dodge',
            'Donkervoort',
            'DS',
            'Ferrari',
            'Fiat',
            'Fisker',
            'Ford',
            'Honda',
            'Hummer',
            'Hyundai',
            'Infiniti',
            'Iveco',
            'Jaguar',
            'Jeep',
            'Kia',
            'KTM',
            'Lada',
            'Lamborghini',
            'Lancia',
            'Land Rover',
            'Landwind',
            'Lexus',
            'Lotus',
            'Maserati',
            'Maybach',
            'Mazda',
            'McLaren',
            'Mercedes-Benz',
            'MG',
            'Mini',
            'Mitsubishi',
            'Morgan',
            'Nissan',
            'Opel',
            'Peugeot',
            'Porsche',
            'Renault',
            'Rolls-Royce',
            'Rover',
            'Saab',
            'Seat',
            'Skoda',
            'Smart',
            'SsangYong',
            'Subaru',
            'Suzuki',
            'Tesla',
            'Toyota',
            'Volkswagen',
            'Volvo',
         ],
      },
      year: {
         type: Number,
         required: true,
      },
      mileage: {
         type: Number,
         required: true,
         default: 0,
      },
      color: {
         type: String,
         required: true,
         enum: [
            'black',
            'blue',
            'brown',
            'gray',
            'green',
            'orange',
            'pink',
            'purple',
            'red',
            'silver',
            'white',
            'yellow',
         ],
      },
      transmitionType: {
         type: String,
         required: true,
         enum: ['automatic', 'manual'],
         default: 'automatic',
      },
      images: [ImageSchema],
   },
   {
      timestamps: true,
   }
)

module.exports = mongoose.model('Car', carSchema)
