# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.create(name: "Skalierungen", subtitle: "Nominal, ordinal und metrisch",
                description: "Um zu wissen, was man mit den vorliegenden Daten anfangen kann, muss man erst bestimmen, wie diese skaliert sind.",
                iconSrc: "/assets/images/skalierungen64.png")
Category.create(name: "Lageparamter", subtitle: "Modalwert, Median, Mittelwert und Quantile",
                description: "Wo liegen die Daten? In der betriebswirtschaft gerne als KPI (Key Performance Indicator) benutzt. z.B. durchschnittlicher Umsatz.",
                iconSrc: "/assets/images/lageparameter64.png")
Category.create(name: "Streuparameter", subtitle: "Spannweite, Varianz, Standardabweichung und Variationskoeffizient",
                description: "Nun wo wir das Zentrum der Daten kennen, wie weit sind die Daten davon entfernt?",
                iconSrc: "/assets/images/streuparameter64.png")