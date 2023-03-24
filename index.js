const contacts = require("./contacts.js")
const argv = require("yargs").argv;
const invokeAction = async ({ action, id, name, email, phone }) => {
   switch (action) {
      case "list":
         console.table(await contacts.listContacts())
         break
      case "get":
         console.log(await contacts.getContactById(id))
         break
      case "add":
         const newContact = await contacts.addContact(name, email, phone)
         return console.log(newContact)
      case "remove":
         console.log(await contacts.removeContact(id))
         break;
      default:
         console.warn('\x1B[31m Unknown action type!');
   }
}
invokeAction(argv);






