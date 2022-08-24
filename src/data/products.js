const products = [
    {
        type: 'candle',
        title: 'Lavender Skies Scented Candle',
        url: 'lavender-skies-scented-candle',
        id: '1',
        price: 2990,
        fragrance: '',
        measurements: '',
        capacity: '360',
        color: 'white',
        collection: 'Private Collection',
        featured_image: 'lavender_skies.jpg',
        thumbnail: 'lavender_skies.jpg',
        images: ['lavender_skies.jpg', 'lavender_skies.jpg'],
        rating: {
          stars: '4.2',
          amount_of_reviews: '21'
        },
        additionalInfo: {
            short: 'luxurious scented candle, 360 gr',
            description: ['Invite spring into your home with the Lavender Skies scented candle from our Private Collection. This composition is an experience of true floral sophistication. Pure violet and orris notes are lifted by distinct leathery accents and powerful woody aspects.', 'The beautiful champagne coloured glass jar is a perfect addition to any decor, either in your own home or as a gift to another. When empty, clean out the candle and use it to hold flowers, pencils or brushes.'],
            ingredients: ['Isoeugenol, Piperonal, 3-Methyl-4-(2,6,6-Trimethyl-2-Cyclohexen-1-yl)-3-Buten-2-One, Tetramethyl, Acetyloctahydronaphtalenes, Linalool, Coumarin.'],
        }
    },
    {
        type: 'candle',
        title: 'Fresh Cotton Scented Candle XL',
        url: 'fresh-cotton-scented-candle-xl',
        id: '2',
        price: 5500,
        fragrance: '',
        measurements: '',
        capacity: '1000',
        color: 'gold',
        collection: 'Laundry Day',
        featured_image: 'fresh_cotton.jpg',
        thumbnail: 'fresh_cotton.jpg',
        images: ['fresh_cotton.jpg', 'fresh_cotton.jpg'],
        rating: {
          stars: '4.6',
          amount_of_reviews: '14'
        },
        additionalInfo: {
            short: 'XL luxury scented candle, 1000 gr',
            description: ['Infuse your sanctuary with the distinct Oriental character of this luxurious scented candle. Based on the rich and smoky aromas of oudh and patchouli, the XL scented candle lasts for up to 70 hours.', 'When you light the candle for the first time, let it burn for 4 hours to melt the top layer and guarantee an even burn.'],
            ingredients: ['[3R-(3α,3aβ,6β,7β,8aα)]-Octahydro-6-Methoxy-3,6,8,8-Tetramethyl-1H-3a,7-Methanoazulene, 1-(1,2,3,4,5,6,7,8-Octahydro-2,3,8,8-Tetramethyl-2-Naphthyl)Ethan-1-One, [3R-(3alpha,3abeta,7beta,8aalpha)]-1-(2,3,4,7,8,8a-Hexahydro-3,6,8,8-Tetramethyl-1H-3a,7-Methanoazulen-5-yl)Ethan-1-One, Citronellol.'],
        }
    },
    {
        type: 'candle',
        title: 'Lemon Pie Scented Candle',
        url: 'lemon-pie-scented-candle',
        id: '3',
        price: 2990,
        fragrance: '',
        measurements: '',
        capacity: '360',
        color: 'white',
        collection: 'Private Collection',
        featured_image: 'lemon_pie.jpg',
        thumbnail: 'lemon_pie.jpg',
        images: ['lemon_pie.jpg', 'lemon_pie.jpg'],
        rating: {
          stars: '4.8',
          amount_of_reviews: '36'
        },
        additionalInfo: {
            short: 'luxurious scented candle, 360 gr',
            description: ['Light your way to tranquillity with our Private Collection candle for a balancing and overall calming effect. The Lemon Pie\'s aromatic fragrance composition is enriched with spicy accents of cardamom and galbanum and combined with lush pink blossoms. Cedarwood and vetiver form the refined woody base.', 'The beautiful white coloured glass jar is a perfect addition to any decor, either in your own home or as a gift to another. When empty, clean out the candle and use it to hold flowers, pencils or brushes.', 'When you light the candle for the first time, let it burn for 2 hours to melt the top layer and guarantee an even burn. The scented candle contains natural wax and lasts for up to 60 hours. Tip: you can also complement the fragrance with our elegant Private Collection fragrance sticks.'],
            ingredients: ['Linalyl Acetate, Hexyl Salicylate, Isoeugenol, Geranyl Acetate, Limonene, Tetramethyl Acetyloctahydronaphtalenes, Linalool, Citronellol, Methylenedioxyphenyl Methylpropanal, Beta-Pinenes.'],
        }
    },
    {
        type: 'candle',
        title: 'Ocean Fresh Scented Candle',
        url: 'ocean-fresh-scented-candle',
        id: '4',
        price: 1990,
        fragrance: '',
        measurements: '',
        capacity: '290',
        color: 'white',
        collection: 'The Ritual Of Sakura',
        featured_image: 'ocean_fresh.jpg',
        thumbnail: 'ocean_fresh.jpg',
        images: ['ocean_fresh.jpg', 'ocean_fresh.jpg'],
        rating: {
          stars: '4.8',
          amount_of_reviews: '31'
        },
        additionalInfo: {
            short: 'scented candle, 290 gr',
            description: ['Light your way to a new beginning with this luxurious scented candle. Based on the renewing fragrance of cherry blossom and rice milk. The candle lasts for up to 50 hours.'],
            ingredients: [],
        }
    },
    {
        type: 'candle',
        title: 'Cozy Orange Scented Candle',
        url: 'cozy-orange-scented-candle',
        id: '5',
        price: 1990,
        fragrance: '',
        measurements: '',
        capacity: '290',
        color: 'red',
        collection: 'The Ritual Of Ayurveda',
        featured_image: 'cozy_orange.jpg',
        thumbnail: 'cozy_orange.jpg',
        images: ['cozy_orange.jpg', 'cozy_orange.jpg'],
        rating: {
          stars: '3.8',
          amount_of_reviews: '19'
        },
        additionalInfo: {
            short: 'scented candle, 290 gr',
            description: ['Illuminate your path to inner harmony with this luxurious scented candle. Based on authentic Ayurvedic ingredients like Indian rose and sweet almond oil. The candle lasts for up to 50 hours.'],
            ingredients: [],
        }
    },
    {
        type: 'candle',
        title: 'Citrus Scented Candle',
        url: 'citrus-scented-candle',
        id: '6',
        price: 1990,
        fragrance: '',
        measurements: '',
        capacity: '290',
        color: 'green',
        collection: 'The Ritual Of Jing',
        featured_image: 'citrus.jpg',
        thumbnail: 'citrus.jpg',
        images: ['citrus.jpg', 'citrus.jpg'],
        rating: {
          stars: '5',
          amount_of_reviews: '46'
        },
        additionalInfo: {
            short: 'scented candle, 290 gr',
            description: ['Envelop yourself with a sense of inner peace when you light this luxurious scented candle. Enhanced with the floral and warming fragrance of Sacred Lotus and Jujube, The Ritual of Jing Scented Candle gives off a calming and soothing aroma and is a natural and stylish look for your home. The candle lasts for up to 50 hours.'],
            ingredients: ['Cinnamaldehyde, Isoeugenol, α-Methyl-1,3-Benzodioxole-5-Propionaldehyde, Piperonal, 4-Tert-Butylcyclohexyl Acetate, Tetrahydrolinalool, Linalool, α-Hexylcinnamaldehyde, Benzyl Salicylate, Amyl Cinnamic Aldehyde, 3-Methyl-4-(2,6,6-Trimethyl-2-Cyclohexen-1-Yl)-3-Buten-2-One, Tetramethyl Acetyloctahydronaphtalenes.'],
        }
    },
    // {
    //     type: 'candle',
    //     title: 'Imperial Rose Scented Candle',
    //     url: 'imperial-rose-scented-candle',
    //     id: '7',
    //     price: 2990,
    //     fragrance: '',
    //     measurements: '',
    //     capacity: '360',
    //     color: 'brown',
    //     collection: 'Private Collection',
    //     featured_image: 'odd.jpg',
    //     images: ['odd.jpg', 'odd.jpg'],
    //     additionalInfo: {
    //         short: 'luxurious scented candle, 360 gr',
    //         description: ['This luxurious scented candle from our Private Collection evokes the scent of a rose garden in full bloom. The intense rose notes are combined with fresh watery elements and the traditional green tea adds a natural elements to the fragrance. The entire composition gets a warm an elegant touch by musky and powdery base notes.', 'The beautiful champagne coloured glass jar is a perfect addition to any decor, either in your own home or as a gift to another. When empty, clean out the candle and use it to hold flowers, pencils or brushes.'],
    //         ingredients: ['Geraniol, Linalyl Acetate, Hexyl Salicylate, (E)-1-(2,6,6-Trimethyl-1,3-Cyclohexadien-1-yl)-2-Buten-1-One α-Hexylcinnamaldehyde, Citronellol, Methylenedioxyphenyl Methylpropanal, Limonene, Tetramethyl Acetyloctahydronaphtalenes, Amber Decane, Linalool.'],
    //     }
    // },
    // {
    //     type: 'candle',
    //     title: 'Scented Candle',
    //     url: 'the-ritual-of-mehr-scented-candle',
    //     id: '8',
    //     price: 1990,
    //     fragrance: '',
    //     measurements: '',
    //     capacity: '290',
    //     color: 'brown',
    //     collection: 'The Ritual Of Mehr',
    //     featured_image: 'even.jpg',
    //     images: ['even.jpg', 'even.jpg'],
    //     additionalInfo: {
    //         short: 'scented candle, 290 gr',
    //         description: ['Lighten your mood with this luxurious The Ritual of Mehr scented candle. Enhanced with the mood-enhancing fragrance of sweet orange and energising cedar wood, grounded with a touch of warming spices, this scented candle treats you to up to 50 hours of burning time. The beautiful luxury home fragrance gives off a soothing and warm aroma and adds a natural and stylish touch to your home.'],
    //         ingredients: ['Cinnamaldehyde, Linalyl Acetate, [3R-(3α,3aβ,6β,7β,8aα)]-Octahydro-6-Methoxy-3,6,8,8-Tetramethyl-1H-3a,7-Methanoazulene, Tetramethyl Acetyloctahydronaphtalenes, Linalool, α-Methylcinnamaldehyde, Eugenol.'],
    //     }
    // },
    // {
    //     type: 'candle',
    //     title: 'Scented Candle',
    //     url: 'the-ritual-of-karma-scented-candle',
    //     id: '9',
    //     price: 1990,
    //     fragrance: '',
    //     measurements: '',
    //     capacity: '290',
    //     color: 'white',
    //     collection: 'The Ritual Of Karma',
    //     featured_image: 'odd.jpg',
    //     images: ['odd.jpg', 'odd.jpg'],
    //     additionalInfo: {
    //         short: 'scented candle, 290 gr',
    //         description: ['Create a sunny, summer atmosphere in your house with The Ritual of Karma scented candle. Featuring the delicately sweet aroma of holy lotus combined with nourishing white tea, you can enjoy it for up to 50 hours. To enhance your scent experience, combine it with The Ritual of Karma fragrance sticks for a special summer ambiance.'],
    //         ingredients: [],
    //     }
    // },
    // {
    //     type: 'candle',
    //     title: 'Goji Berry Scented Candle',
    //     url: 'goji-berry-scented-candle',
    //     id: '10',
    //     price: 2990,
    //     fragrance: '',
    //     measurements: '',
    //     capacity: '360',
    //     color: 'white',
    //     collection: 'Private Collection',
    //     featured_image: 'even.jpg',
    //     images: ['even.jpg', 'even.jpg'],
    //     additionalInfo: {
    //         short: 'luxury scented candle, 360 gr',
    //         description: ['Get ready to grin thanks to this luxuriously scented candle from our Private Collection. Based on goji berries - otherwise known as "smiley berries" in China – the Goji Berry scented candle expresses the irresistible freshness of a bouquet of roses, sweetened with a touch of blackcurrant.', 'The beautiful white coloured glass jar is a perfect addition to any decor, either in your own home or as a gift to another. When empty, clean out the candle and use it to hold flowers, pencils or brushes.'],
    //         ingredients: ['Geraniol, Beta-Pinenes, Linalool, Citronellol, Nerol.'],
    //     }
    // },
    // {
    //     type: 'candle',
    //     title: 'Sweet Jasmine Scented Candle',
    //     url: 'sweet-jasmine-scented-candle',
    //     id: '11',
    //     price: 2990,
    //     fragrance: '',
    //     measurements: '',
    //     capacity: '360',
    //     color: 'brown',
    //     collection: 'Private Collection',
    //     featured_image: 'odd.jpg',
    //     images: ['odd.jpg', 'odd.jpg'],
    //     additionalInfo: {
    //         short: 'luxury scented candle, 360 gr',
    //         description: ['Create a sense of calm in your home with the Sweet Jasmine scented candle from our Private Collection. The sparkling and vibrant fruity top note of fresh citrus notes and berries leads to elegant blossoms like peony and muguet. And sandalwood adds elegance and warmth to the fragrance.', 'The beautiful champagne coloured glass jar is a perfect addition to any decor, either in your own home or as a gift to another. When empty, clean out the candle and use it to hold flowers, pencils or brushes.'],
    //         ingredients: ['Geraniol, Linalyl Acetate, Citronellol, Benzyl Salicylate, Methylenedioxyphenyl Methylpropanal, Limonene, Tetramethyl Acetyloctahydronaphtalenes, Amber Decane, Linalool.'],
    //     }
    // },
    // {
    //     type: 'candle',
    //     title: 'Green Cardamom Scented Candle',
    //     url: 'green-cardamom-scented-candle',
    //     id: '12',
    //     price: 2990,
    //     fragrance: '',
    //     measurements: '',
    //     capacity: '360',
    //     color: 'white',
    //     collection: 'Private Collection',
    //     featured_image: 'even.jpg',
    //     images: ['even.jpg', 'even.jpg'],
    //     additionalInfo: {
    //         short: 'luxury scented candle, 360 gr',
    //         description: ['Lighten up your living space with this intensely aromatic and unique candle from our Private Collection. Based on the resin-like scent of green cardamom, the candle is made from 70% natural wax and can be enjoyed for up to 60 hours.'],
    //         ingredients: ['Geraniol, 1-(2,6,6-Trimethyl-1,3-Cyclohexadien-1-Yl)-2-Buten-1-One, Cinnamaldehyde, Limonene, Linalool, Citronellol, Acetylcedrene, 3-Methylcyclopentadecenone.'],
    //     }
    // },
    // {
    //     type: 'candle',
    //     title: 'Scented Candle',
    //     url: 'the-ritual-of-hammam-scented-candle',
    //     id: '13',
    //     price: 1990,
    //     fragrance: '',
    //     measurements: '',
    //     capacity: '290',
    //     color: 'blue',
    //     collection: 'The Ritual Of Hammam',
    //     featured_image: 'odd.jpg',
    //     images: ['odd.jpg', 'odd.jpg'],
    //     additionalInfo: {
    //         short: 'scented candle, 290 gr',
    //         description: ['Transform your home into a real Hammam with this luxurious scented candle. Based on the authentic Turkish steam bath scents of rosemary and eucalyptus. The candle lasts for up to 50 hours.'],
    //         ingredients: ['Benzyl Salicylate, α-Hexylcinnamaldehyde, Linalyl Acetate, 1-(1,2,3,4,5,6,7,8-Octahydro-2,3,8,8-Tetramethyl-2-Naphthyl)Ethan-1-One, 3-Methyl-4-(2,6,6-Trimethyl-2-Cyclohexen-1-yl)-3-Buten-2-One, Limonene, Hexyl Salicylate, Pentadecan-15-Olide, 4-Tert-Butylcyclohexyl Acetate, Cineole, Citronellol, Piperonal, Linalool.'],
    //     }
    // },
    // {
    //     type: 'candle',
    //     title: 'Sacred Saffron Scented Candle',
    //     url: 'sacred-saffron-scented-candle',
    //     id: '14',
    //     price: 2990,
    //     fragrance: '',
    //     measurements: '',
    //     capacity: '360',
    //     color: 'black',
    //     collection: 'Private Collection',
    //     featured_image: 'even.jpg',
    //     images: ['even.jpg', 'even.jpg'],
    //     additionalInfo: {
    //         short: 'luxury scented candle, 360 gr',
    //         description: ['Enjoy the spicy, warm and very powerful fragrance of Saffron with our Private Collection Sacred Saffron scented candle. Breathe in the unique spicy composition combining pink peppery notes with precious saffron, ginger and clove. Incense adds herbal smokiness that is complimented by warm ambery notes.', 'The beautiful black coloured glass jar is a perfect addition to any decor, either in your own home or as a gift to another. When empty, clean out the candle and use it to hold flowers, pencils or brushes.'],
    //         ingredients: ['Limonene, Acetylcedrene, Tetramethyl Acetyloctahydronaphtalenes, Eugenol.'],
    //     }
    // },
    // {
    //     type: 'candle',
    //     title: 'Savage Garden Scented Candle',
    //     url: 'savage-garden-scented-candle',
    //     id: '15',
    //     price: 2990,
    //     fragrance: '',
    //     measurements: '',
    //     capacity: '360',
    //     color: 'white',
    //     collection: 'Private Collection',
    //     featured_image: 'odd.jpg',
    //     images: ['odd.jpg', 'odd.jpg'],
    //     additionalInfo: {
    //         short: 'luxury scented candle, 360 gr',
    //         description: ['Experience a moment of pure tranquility when you light this luxurious candle from our Private Collection. Based on green vetiver, otherwise known as the "oil of tranquility". The candle can help soothe you for up to 60 hours.'],
    //         ingredients: ['Geranyl Acetate, Tetramethyl Acetyloctahydronaphtalenes, Nerol, Linalyl Acetate, Cineole, Tetrahydrolinalool.'],
    //     }
    // },
];

export default products;




    // {
    //     type: '',
    //     title: '',
    //     url: '',
    //     id: '',
    //     price: '',
    //     fragrance: '',
    //     info: '',
    //     measurements: '',
    //     color: '',
    //     collection: '',
    //     featured_image: '',
    //     images: [],
    // }