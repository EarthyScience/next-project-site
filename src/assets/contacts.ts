import { AddressData, ContactData } from '@/components/FooterTypes';

export const contactInfo = {
  copyright: "Max-Planck-Gesellschaft",
  contact: {
    address: {
      company: "Max-Planck Institute for Biogeochemistry",
      street: "Hans-Knöll Str. 10",
      zip: "07745",
      city: "Jena",
      state: "Thuringia",
      country: "Germany"
    } as AddressData,

    data: {
      contacts: [
        {
          name: "Max-Planck",
          position: "Research Director",
          email: "max.planck@mpg.de"
        },
        {
          name: "Alice",
          email: "alice.doe@mpg.de"
        },
      ],
      mainEmail: "contact@mpg.de"
    } as ContactData
  }
}