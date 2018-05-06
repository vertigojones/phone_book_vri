User.destroy_all
Contact.destroy_all

owen = User.create!({
    name: "Owen Liversidge",
    photo_url: "https://i.imgur.com/a3hvho6.jpg?1",
    email: "owen.liversidge@gmail.com",
    phone: "404-579-6249"
})

sweety = User.create!({
    name: "Sweety Knowles",
    photo_url: "https://scontent.fatl1-2.fna.fbcdn.net/v/t1.0-9/31925084_10155580087929150_8968569026095611904_o.jpg?_nc_cat=0&oh=52768a37500dd3c6dcbf9210566e4fa2&oe=5B922654",
    email: "sweetyjames.knowles@gmail.com",
    phone: "706-315-1290"
})

owen.contacts.create!(
    name: "Cameron Gunter",
    email: "cameron@gunter.com",
    phone: "404-267-4672",
    address: "1234 Nowhere St, Atlanta, GA. 30324.",
    relationship: "Work"
)

owen.contacts.create!(
    name: "Ruby Liversidge",
    email: "ruby@liversidge.com",
    phone: "404-639-2765",
    address: "65 English Rd, Decatur, GA. 30033.",
    relationship: "Family"
)

sweety.contacts.create!(
    name: "Courtney Lowery",
    email: "courtney@lowery.com",
    phone: "678-537-1286",
    address: "1001 Out There Ln, Mableton, GA. 33654.",
    relationship: "Friend"
)

sweety.contacts.create!(
    name: "Farrukh Khalikov",
    email: "farrukh@khalikov.com",
    phone: "404-639-9062",
    address: "6725 Amsterdam Ave, Atlanta, GA. 32876.",
    relationship: "Business Associate"
)

