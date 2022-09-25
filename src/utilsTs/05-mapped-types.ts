type PcBrand = {
  name: string,
  country: string,
  createdAt: Date,
}

type WellKnownBrands = 'apple' | 'lenovo' | 'dell' | 'huawei'

type MyPcRecord  = {
  [BrandKey in WellKnownBrands]? : PcBrand
}

const brandRecord: MyPcRecord = {
  apple: {
    country: 'USA',
    createdAt: new Date(),
    name:'Apple'
  }

}


function printPcCatalog(pcCatalog: MyPcRecord){
  console.log(pcCatalog.apple?.name)
}


type PartOfWindow = {
  [Key in 'document' | 'screen' | 'navigator']: Window[Key]
}


export {}