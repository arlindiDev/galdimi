class Produkti {
  constructor(id, emri, barcode) {

    this.id = id
    this.emri = emri
    this.barcode = barcode
  }

  toString() {
    return 'nr: ' + this.id + ' ' + this.emri
  }

  krahasoProduktet(produkti) {
    if (this.id == produkti.id) {
      return true
    }
    return false
  }

}

function createProduct(id, emri, barcode) {

  if (id < 0 || emri.length == 0) {
    return -1
  }
  return new Produkti(id, emri, barcode)
}

class Marketi {
  constructor(emriMarketit) {
    this.emriMarketit = emriMarketit
    this.produktet = []
  }

  getProdukti(id) {
    for (var i = 0; i < this.produktet.length; i++) {
      if (this.produktet[i].id == id) {
        return this.produktet[i]
      }
    }
    return null
  }

  addProdukti(produkti) {

    if (this.produktet.length == 0) { // nese array eshte i thate
        this.produktet.push(produkti) // ather shtoje produktin ne array se ska 
        return true                   // kthe true // heren e dyte nuk plotesohet kushti se array ka element
    } 


    // nese produkti veq osht ne array mos e shto perndryshe shtoje
    for (var i = 0; i < this.produktet.length; i++) { // ketu i = 0  array produktet plotesohet se produktet.length = 1
        if (this.produktet[i].krahasoProduktet(produkti)) { // produktet[0] me krahasu me produktin qe po dojme me shtu nese jane te njejta  
            return false                                    // nese sjane te njejta ather shtoje
        }
    }

    this.produktet.push(produkti) // ketu e kthejm produktin e ri ne array produktet
    return true                   // kthejme true per shkak se produkti nuk eshte i njejte ne array
    // i = 0 | 0 < 0 
}



}

produkti1 = createProduct(124, 'CD', '1234') // 
produkti2 = createProduct(123, 'DVD', '1278')
produkti3 = createProduct(125, 'Buka', '4567')
produkti4 = createProduct(126, 'Krypa', '7894')

marketi1 = new Marketi( 'Maxi')

marketi1.addProdukti(produkti1)
marketi1.addProdukti(produkti2)
marketi1.addProdukti(produkti3)
marketi1.addProdukti(produkti4)
console.log(marketi1)


console.log(marketi1.getProdukti(10))





