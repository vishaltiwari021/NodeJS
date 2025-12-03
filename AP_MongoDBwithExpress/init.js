//Mongoose Setup:
const mongoose  = require("mongoose");
main().then((res) =>{
    console.log("Connect succesfuly");
}).catch((err) =>{console.log(err);
})
async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const chat = require("./models/chat.js");
//here is tha data of chats :
let chats = [
    {
        from: "Obidiah",
        to: "Lilas",
        message: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        created_at: new Date()
    },
    {
        from: "Ebony",
        to: "Myrna",
        message: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        created_at: new Date()
    },
    {
        from: "Emilie",
        to: "Gayleen",
        message: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        created_at: new Date()
    },
    {
        from: "Anett",
        to: "Clarabelle",
        message: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        created_at: new Date()
    },
    {
        from: "Michele",
        to: "Kelcey",
        message: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        created_at: new Date()    },
    {
        from: "Hatti",
        to: "Chryste",
        message: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        created_at: new Date()
    },
    {
        from: "Rae",
        to: "Korry",
        message: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        created_at: new Date()
    },
    {
        from: "Alma",
        to: "Tildy",
        message: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        created_at: new Date()
    },
    {
        from: "Donnie",
        to: "Jenda",
        message: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        created_at: new Date()
    },
    {
        from: "Cassie",
        to: "Mandie",
        message: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        created_at: new Date()
    },
    {
        from: "Rooney",
        to: "Rosy",
        message: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        created_at: new Date()    },
    {
        from: "Oliy",
        to: "Lyndsey",
        message: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        created_at: new Date()
    },
    {
        from: "Dot",
        to: "Thekla",
        message: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        created_at: new Date()
    },
    {
        from: "Emlen",
        to: "Pris",
        message: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        created_at: new Date()
    },
    {
        from: "Mehetabel",
        to: "Evelina",
        message: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        created_at: new Date()    },
    {
        from: "Aurelia",
        to: "Antonella",
        message: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        created_at: new Date()
    },
    {
        from: "Erminia",
        to: "Nichole",
        message: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        created_at: new Date()    },
    {
        from: "Daron",
        to: "Paulie",
        message: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        created_at: new Date()
    },
    {
        from: "Jeane",
        to: "Gilberta",
        message: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        created_at: new Date()
    },
    {
        from: "Bartholomeo",
        to: "Dorri",
        message: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        created_at: new Date()
    }
];
chat.insertMany(chats);