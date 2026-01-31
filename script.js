function datecard() {
    const date = new Date()

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"]
    const months = ["January", "February","March","April", "May",
                "June", "July", "August" , "September", "October", "November" ]

                document.getElementById("day").innerText= String
                (date.getDate()).padStart(2, "0")

                    document.getElementById("week").innerText=
                days[date.getDay()]

                 document.getElementById("month").innerText= months
                [date.getMonth()]

                 document.getElementById("year").innerText= 
                [date.getFullYear()]

}
datecard()
