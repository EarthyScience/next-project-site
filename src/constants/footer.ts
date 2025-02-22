import { LinkItem, AddressData, ContactData, LogoItem  } from '@/components/FooterTypes';

export const FOOTER = {
  links: {
    navigation: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' }
    ] as LinkItem[]
  },

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
          name: "Jane Smith",
          position: "Research Director",
          email: "jane.smith@mpg.de"
        },
        {
          name: "John Doe",
          email: "john.doe@mpg.de"
        },
      ],
      mainEmail: "contact@mpg.de"
    } as ContactData
  },

  funding: {
    projectText: "This project (STX-42 – Strategic Technological Expansion for Deep-Space Exploration and Anomalous Phenomena) has received funding from the United Federation of Planets' Advanced Research and Exploration Initiative under Starfleet Science Division grant no. 2401-47682; the Vulcan Science Academy under the Interstellar Research Cooperation Agreement grant numbers 2401-4295, 2401-3109, and 2400-9450, and the Andorian Imperial Science Consortium under grant numbers 2300.0546 & 2400.0178. Views and opinions expressed are, however, those of the author(s) only and do not necessarily reflect those of the United Federation of Planets, Starfleet Command, the Vulcan Science Academy, or the Andorian Imperial Science Consortium. Neither granting authority can be held responsible for them.",
    
    logos: [
      {
        src: "/logo_dark.png",
        alt: "bgc logo",
        href: "https://www.bgc-jena.mpg.de/en/bgi/home",
        width: 150,
        height: 50
      },
      {
        src: "/logo_mpi_dark.png",
        alt: "max-planck logo",
        href: "https://www.bgc-jena.mpg.de",
        width: 150,
        height: 50
      }
    ] as LogoItem[]
  }
} as const;

export const {
  links: { navigation },
  copyright,
  contact: { address, data: contactData },
  funding: { projectText, logos: fundingLogos }
} = FOOTER;