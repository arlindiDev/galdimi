class Libri {
    constructor(emer, isbn) {
        this.emer = emer;
        this.isbn = isbn;
    }

    krahasoLibrat(libri) {
        if (this.isbn == libri.isbn) {
            return true
        }
        return false
    }

}

class Biblioteka {
    constructor(emriBibliotekes) {
        this.emriBibliotekes = emriBibliotekes;
        this.librat = [];
    }

    addLibri(libri) {

        if(this.librat.length == 0 ) {
            this.librat.push(libri)
            return true
        }


        // nese libri veq osht ne array mos e shto perndryshe shtoje
        for (var i = 0; i < this.librat.length; i++) {  
            if (this.librat[i].krahasoLibrat(libri)) {
                return false
            }
        }

        this.librat.push(libri)
        return true
        // i = 0 | 0 < 0 
    }
}

libri1 = new Libri('Gjenerali', 1234)
libri2 = new Libri('Hajdari', 1235)
libri3 = new Libri('Javascript Book', 1235)
libri1.krahasoLibrat(libri2)
bibloteka1 = new Biblioteka('Naim Frasheri')

bibloteka1.addLibri(libri1)
bibloteka1.addLibri(libri2)
bibloteka1.addLibri(libri1)
bibloteka1.addLibri(libri3)

console.log(bibloteka1.librat)
