const products = [
    {
        id: 0,
        name: 'Striped Panel Button Front Knot Hem Cami Top ',
        description: 'Rock in this chic color block top for women. With colour blocked styles becoming a big hit, make sure you have this top to flaunt.It is light in weight, easy to carry, durable, affordable. Stay in trend this season with this stunning latest design color block top for women and make an everlasting impression.',
        url: '/Images/Products/Women/1/Color1/Striped Panel Button Front Knot Hem Cami Top .jpg',
        type: 'women', option: 'top', rating: '3', comment: '100',
        colors: {
            'red': { color: '#37110e', size: ['M', 'L', 'XL'], mainPic: '/Images/Products/Women/1/Color1/Striped Panel Button Front Knot Hem Cami Top .jpg', pics: ['/Images/Products/Women/1/Color1/61n+pqsT5XL._SY741_.jpg', '/Images/Products/Women/1/Color1/51WnFT1JJ8L._SY741_.jpg', '/Images/Products/Women/1/Color1/51T7Bi5EbhL._SY741_.jpg', '/Images/Products/Women/1/Color1/41V-Z+YUatL._SY741_.jpg'], sale: '15' },
            'black': { color: '#232524', size: ['S', 'M', 'XL'], mainPic: '/Images/Products/Women/1/Color2/Screenshot 2024-07-12 at 20-05-29 SHEIN Privé Plus Striped Print Knot Front Cami Top SHEIN USA.png', pics: ['/Images/Products/Women/1/Color2/Screenshot 2024-07-12 at 20-05-51 SHEIN Privé Plus Striped Print Knot Front Cami Top SHEIN USA.png', '/Images/Products/Women/1/Color2/Screenshot 2024-07-12 at 20-06-50 SHEIN Privé Plus Striped Print Knot Front Cami Top SHEIN USA.png'], sale: '0' }
        },
        price: '16.00', fabric: '100% Polyester', pattern: 'Striped', fit: 'Regular Fit ', neck: 'Spaghetti Strap', sleeve: '-', style: 'Boho'
    },
    {
        id: 1,
        name: 'Satin Spaghetti Straps Short Mini V neck Homecoming Dresses',
        description: 'Crafted with high quality satin fabric, this dress features a cowl neck and open V-Back with the options of sleeveless and spaghetti straps. With a length that falls above the knee this dress is the perfect way to make a statement at any cocktail event. ',
        url: '/Images/Products/Women/2/Cute Spaghetti Straps V Neck Knee Length Short Prom Dress, Homecoming Dress H1011.jpg',
        type: 'women', option: 'dress', rating: '4', comment: '213',
        colors: {
            'white': { color: '#fff', size: ['S', 'M', 'XL'], mainPic: '/Images/Products/Women/2/Cute Spaghetti Straps V Neck Knee Length Short Prom Dress, Homecoming Dress H1011.jpg', pics: ['/Images/Products/Women/2/White-Satin-Spaghetti-Straps-Short-Mini-White-V-neck-Homecoming-Dresses-RJS103-Rjerdress-1491.webp', '/Images/Products/Women/2/White-Satin-Spaghetti-Straps-Short-Mini-White-V-neck-Homecoming-Dresses-RJS103-Rjerdress-4273.webp'], sale: '0' }
        },
        price: '135.61', fabric: 'Satin', pattern: 'Ruched', fit: 'Regular Fit ', neck: 'V-neck', sleeve: '-', style: 'Normal'
    },
    {
        id: 2,
        name: 'women’s pullover sweaters Stand Collar Mock Neck Drop Shoulder Sweater Long Sleeve Classic-Fit ',
        description: 'Fashion casual style suitable for both women and girls, perfect to pair with shorts, pants, skirt, jeans, ankle boots ect.',
        url: '/Images/Products/Women/3/photo_2024-07-10_16-38-47.jpg',
        type: 'women', option: 'plainTShirt', rating: '3.5', comment: '183',
        colors: {
            'pink': { color: '#d5cbd6', size: ['S', 'L', 'XXL'], mainPic: '/Images/Products/Women/3/photo_2024-07-10_16-38-47.jpg', pics: ['/Images/Products/Women/3/Screenshot 2024-07-12 at 21-11-52 China Ladies Favourite Mock Neck Baby Alpaca Blended Pullover Sweater Photos & Pictures - Made-in-china.com.png', '/Images/Products/Women/3/Screenshot 2024-07-12 at 21-12-02 China Ladies Favourite Mock Neck Baby Alpaca Blended Pullover Sweater Photos & Pictures - Made-in-china.com.png'], sale: '10' }
        },
        price: '43.00', fabric: '79% Polyester / 21% Acrylic', pattern: 'Plain', fit: 'Regular Fit ', neck: 'Stand Collar', sleeve: 'Long Sleeve', style: 'Normal'
    },
    {
        id: 3,
        name: 'Women’s Cardigan, Elegant Plain Long Cardigan',
        description: 'Women’s Cardigan, Elegant Plain Long Cardigan, Autumn Warm Wool Coat, Open Long Sleeve Cardigan, Classic Vintage Winter Coat, Trench Coat',
        url: '/Images/Products/Women/4/Color1/Colorblock Longline Coat.jpg',
        type: 'women', option: 'jacket', rating: '3', comment: '116',
        colors: {
            'grey': { color: '#ccc', size: ['S', 'M', 'L', 'XL'], mainPic: '/Images/Products/Women/4/Color1/Colorblock Longline Coat.jpg', pics: ['/Images/Products/Women/4/Color1/Screenshot 2024-07-12 at 21-26-56 Kolylong Womens Cardigan Elegant Plain Long Cardigan Autumn Warm.png', '/Images/Products/Women/4/Color1/Screenshot 2024-07-12 at 21-27-13 Kolylong Womens Cardigan Elegant Plain Long Cardigan Autumn Warm Wool Coat Open Long Sleeve .png'], sale: '20' },
            'black': { color: '#000', size: ['S', 'M', 'XL'], mainPic: '/Images/Products/Women/4/Color2/Kolylong Womens Cardigan Elegant Plain Long Cardigan Autumn Warm Wool Coat Open .png', pics: [], sale: '0' }
        },
        price: '25.99', fabric: 'Cotton', pattern: 'Plain', fit: 'Regular Fit ', neck: '-', sleeve: '3/4 Sleeve', style: 'Normal'
    },
    {
        id: 4,
        name: 'women’s Wide Leg Paper Bag Pant Pants',
        description: 'This wide leg paper bag pant is the perfect pant for comfort and style. Fashioned with a stretchy blend, a tie and paper bag style waist. Machine washable.',
        url: '/Images/Products/Women/5/Solid High Waist Pants, Casual Belted Wide Leg Pants, Women’s Clothing - Temu.jpg',
        type: 'women', option: 'pants', rating: '3', comment: '8',
        colors: {
            'black': { color: '#000', size: ['S', 'M', 'XL'], mainPic: '/Images/Products/Women/5/Solid High Waist Pants, Casual Belted Wide Leg Pants, Women’s Clothing - Temu.jpg', pics: ['/Images/Products/Women/5/61sQM+k3KTL._AC_SX466_.jpg', '/Images/Products/Women/5/61MRKP3v-LL._AC_SX569_.jpg'], sale: '30' }
        },
        price: '64.95', fabric: 'Cotton', pattern: 'Plain', fit: 'Regular Fit ', neck: '-', sleeve: '-', style: 'Normal'
    },
    {
        id: 5,
        name: 'Loose Fit Men’s Drawstring Hem Thermal Lined Puffer Coat ',
        description: ' The men’s winter jacket is made of high-quality windproof fabric, which is smooth to the touch and has excellent thermal insulation performance to provide perfect warmth and comfort in the cold autumn and winter.',
        url: '/Images/Products/Men/1/Color1/Screenshot 2024-07-12 at 22-03-49 Manfinity Homme 1pc Loose Fit Mens Thermal Lined Puffer Coat With Drawstring Hem SHEIN EUR.png',
        type: 'men', option: 'jacket', rating: '5', comment: '160',
        colors: {
            'black': { color: '#000', size: ['S', 'M', 'L', 'XL', 'XXL'], mainPic: '/Images/Products/Men/1/Color1/Screenshot 2024-07-12 at 22-03-49 Manfinity Homme 1pc Loose Fit Mens Thermal Lined Puffer Coat With Drawstring Hem SHEIN EUR.png', pics: ['/Images/Products/Men/1/Color1/Screenshot 2024-07-12 at 22-03-29 Manfinity Homme 1pc Loose Fit Mens Thermal Lined Puffer Coat With Drawstring Hem SHEIN EUR.png', '/Images/Products/Men/1/Color1/Screenshot 2024-07-12 at 22-04-39 Manfinity Homme 1pc Loose Fit Mens Thermal Lined Puffer Coat With Drawstring Hem SHEIN EUR.png'], sale: '0' },
            'grey': { color: '#999', size: ['S', 'M', 'L', 'XL', 'XXL'], mainPic: '/Images/Products/Men/1/Color2/Manfinity Homme 1 Peça Jaqueta Acolchoada Masculina Com Forro Térmico E Hem Com Cordão Para AjusteDescobri produtos incríveis no SHEIN_com, venha conferir!.jpg', pics: ['/Images/Products/Men/1/Color2/Screenshot 2024-07-12 at 22-04-39 Manfinity Homme 1pc Loose Fit Mens Thermal Lined Puffer Coat With Drawstring Hem SHEIN EUR.png'], sale: '0' }
        },
        price: '43.86', fabric: 'Polyester', pattern: 'Plain', fit: 'Regular Fit ', neck: '-', sleeve: 'Long Sleeve', style: 'Normal'
    },
    {
        id: 6,
        name: 'Mens Short Sleeve Shirt',
        description: 'Suitable for leisure, work, dating, dinner, makeup party, theme party, sunbathing, vacation, barbecue, hip-hop, daily life Perfect for any occasion.',
        url: '/Images/Products/Men/2/Men Antlers Embroidery Colourblock Shirt Without Tee.jpg',
        type: 'men', option: 'plainTShirt', rating: '2', comment: '19',
        colors: {
            'white': { color: '#fff', size: ['S', 'M', 'L', 'XL'], mainPic: '/Images/Products/Men/2/Men Antlers Embroidery Colourblock Shirt Without Tee.jpg', pics: ['/Images/Products/Men/2/Screenshot 2024-07-12 at 22-28-28 Manfinity Homme قميص قرون مطرز ألوان متباينة بدون تي شيرت للرجال شي إن.png'], sale: '60' }
        },
        price: '48.95', fabric: 'Cotton', pattern: 'Striped', fit: 'Regular Fit ', neck: '-', sleeve: 'Short Sleeve', style: 'Casual'
    },
    {
        id: 7,
        name: 'Men Contrast Trim Patched Pocket Tee',
        description: 'This Techwear Shirt Pure Cotton Skin-Friendly Fabric Is Made Of 300g Pure Cotton Fabric, Which Is Not Easy To Deform.',
        url: '/Images/Products/Men/3/Men Contrast Trim Patched Pocket Tee.jpg',
        type: 'men', option: 'tShirt', rating: '3', comment: '56',
        colors: {
            'chocolate': { color: 'chocolate', size: ['S', 'M', 'XL'], mainPic: '/Images/Products/Men/3/Men Contrast Trim Patched Pocket Tee.jpg', pics: ['/Images/Products/Men/3/Screenshot 2024-07-12 at 22-45-24 Manfinity Hypemode Men T-Shirts Baggy Crew Neck Short Sleeve Plain Casual Simple Summer Polyester SHEIN EUR.png'], sale: '50' }
        },
        price: '19.95', fabric: 'Cotton', pattern: 'Plain', fit: 'Regular Fit ', neck: 'Crew Neck', sleeve: 'Short Sleeve', style: 'Casual'
    },
    {
        id: 8,
        name: 'White buttonless polo with embroidered Polo club logo',
        description: 'This product is made of certified organic cotton. It means that no harmful chemicals such as pesticides or insecticides are used for growing the cotton.',
        url: '/Images/Products/Men/4/photo_2024-07-10_16-17-55.jpg',
        type: 'men', option: 'poloTShirt', rating: '4', comment: '23',
        colors: {
            'white': { color: '#fff', size: ['S', 'M', 'XL'], mainPic: '/Images/Products/Men/4/photo_2024-07-10_16-17-55.jpg', pics: ['/Images/Products/Men/4/wahts-polos-477-636.jpg', '/Images/Products/Men/4/wahts-polos-477-6361.jpg'], sale: '30' }
        },
        price: '44.99', fabric: 'Cotton', pattern: 'Plain', fit: 'Regular Fit ', neck: 'Button-Down Collar', sleeve: 'Short Sleeve', style: 'Normal'
    },
    {
        id: 9,
        name: 'Hoodie for Men Letter Print Sweatshirt Cotton Pullover Casual Tops.',
        description: 'High Quality Fabric: This hoodies for men made of high quality fabric, soft fabric, let you coexist with fashion and comfortable. Pill-resistant fabric with high stitch density for durability',
        url: '/Images/Products/Men/5/Men Color-block Letter Embroidery Drawstring Hoodie.jpg',
        type: 'men', option: 'hoodie', rating: '4', comment: '213',
        colors: {
            'black': { color: '#000', size: ['S', 'L', 'XXL'], mainPic: '/Images/Products/Men/5/Men Color-block Letter Embroidery Drawstring Hoodie.jpg', pics: ['/Images/Products/Men/5/Screenshot 2024-07-12 at 23-55-12 Manfinity Homme هودي برباط واسع الحجم مع تطريز رسالة بلونين للرجال شي إن.png', '/Images/Products/Men/5/Screenshot 2024-07-13 at 00-01-03 Manfinity Homme هودي برباط واسع الحجم مع تطريز رسالة بلونين للرجال شي إن.png'], sale: '15' }
        },
        price: '49.99', fabric: 'Cotton', pattern: 'Printed', fit: 'Regular Fit ', neck: 'Crew Neck', sleeve: 'Long Sleeve', style: 'Casual'
    },
    {
        id: 10,
        name: 'Slim Fit Jeans',
        description: 'Classic five pocket skinny jeans with a high rise and a slim leg. With stretch. Zip fly closure.',
        url: '/Images/Products/Men/6/CHRISTINA HIGH _ JOURNEY LIGHT USED - JOURNEY LIGHT USED _ 30 _ 32.jpg',
        type: 'men', option: 'Jeans', rating: '4', comment: '213',
        colors: {
            'white': { color: '#fff', size: ['S', 'M', 'XL'], mainPic: '/Images/Products/Men/6/CHRISTINA HIGH _ JOURNEY LIGHT USED - JOURNEY LIGHT USED _ 30 _ 32.jpg', pics: ['/Images/Products/Men/6/81KozRNhn9L._SX569_.jpg'], sale: '5' }
        },
        price: '150.00', fabric: '95% cotton / 5% LYCRA', pattern: 'plain', fit: 'Regular Fit ', neck: '.', sleeve: '-', style: 'Normal'
    },
    {
        id: 11,
        name: 'Men’s Casual Fall 2 Piece Tracksuits Long Sleeve Zip Jacket Straight Sweatpant Sports Sweatsuits Jogging Suits',
        description: 'Men Sports Suits Loose Tracksuits Mens Spring Autumn Fitness Running suits Set Jogging Sweat Suits ',
        url: '/Images/Products/Men/7/Color1/photo_2024-07-10_16-19-40.jpg',
        type: 'men', option: 'joggers', rating: '4', comment: '213',
        colors: {
            'black': { color: '#000', size: ['S', 'M', 'XL'], mainPic: '/Images/Products/Men/7/Color1/photo_2024-07-10_16-19-40.jpg', pics: ['/Images/Products/Men/7/Color1/51yIl0E0+LL._AC_SX569_.jpg'], sale: '0' },
            'white': { color: '#fff', size: ['S', 'M', 'XL'], mainPic: '/Images/Products/Men/7/Color2/61-Qnztz6WL._AC_SX569_.jpg', pics: [], sale: '0' },
            'red': { color: '#f00', size: ['S', 'M', 'XL'], mainPic: '/Images/Products/mwn/7/Color3/618he6dmbpL._AC_SX569_.jpg', pics: [], sale: '0' }
        },
        price: '115.55', fabric: 'Polyester', pattern: 'Striped', fit: 'Regular Fit ', neck: '-', sleeve: 'Long Sleeve', style: 'Normal'
    },
    {
        id: 12,
        name: 'Long Sleeve Cactus Printing Hoodie Pullover Jacket Jumper Streetwear',
        description: 'Punk Style Cactus Print Hoodies Men Casual Pullovers Sweatshirt Tops',
        url: '/Images/Products/Men/8/Color1/61AMfbBxalL._AC_SY550_.jpg',
        type: 'men', option: 'hoodie', rating: '4', comment: '213',
        colors: {
            'blue': { color: '#00f', size: ['S', 'M', 'XL'], mainPic: '/Images/Products/Men/8/Color1/61AMfbBxalL._AC_SY550_.jpg', pics: ['/Images/Products/Men/8/Color1/61asKYKT-CL._AC_SY550_.jpg', '/Images/Products/Men/8/Color1/81xqt452tWL._AC_SY550_.jpg', '/Images/Products/Men/8/Color1/81xwM+pWkIL._AC_SY550_.jpg'], sale: '0' },
            'red': { color: '#f00', size: ['S', 'M', 'XL'], mainPic: '/Images/Products/Men/8/Color2/Color Block Cactus Embroidered Hoodie - L.jpg', pics: ['/Images/Products/Men/8/Color2/28255f62006074fc3738b1e743dd141a4978af0e.webp'], sale: '0' },
            'green': { color: '#0f0', size: ['S', 'M', 'XL'], mainPic: '/Images/Products/Men/8/Color3/3bb43a9c3e47ef3a5e673c34b1dab443a496ef85.webp', pics: ['/Images/Products/Men/8/Color3/cceb71b5c90c11a91bad2299858a6c597486a2b8.webp'], sale: '0' }
        },
        price: '27.99', fabric: 'Cotton', pattern: 'Striped', fit: 'Regular Fit ', neck: 'Crew Neck', sleeve: 'Long Sleeve', style: 'Casual'
    }
]

export default function Products(state = products, action) {
    return state;
}