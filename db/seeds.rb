# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
cat1 = Category.create(name: "Allgemeines", subtitle: "Empirie, Induktion, Deduktion und co",
                       description: "Zu Beginn ein paar Grundlagen der Statistik. Was unterscheidet Stichprobe und Grundgesamtheit? Was ist schließende, was beschreibende Statistik?",
                       iconSrc: "/assets/images/allgemeines64.png")
cat2 = Category.create(name: "Skalierungen", subtitle: "Nominal, ordinal und metrisch",
                description: "Um zu wissen, was man mit den vorliegenden Daten anfangen kann, muss man erst bestimmen, wie diese skaliert sind.",
                iconSrc: "/assets/images/skalierungen64.png")
cat3 = Category.create(name: "Lageparamter", subtitle: "Modalwert, Median, Mittelwert und Quantile",
                description: "Wo liegen die Daten? In der betriebswirtschaft gerne als KPI (Key Performance Indicator) benutzt. z.B. durchschnittlicher Umsatz.",
                iconSrc: "/assets/images/lageparameter64.png")
cat4 = Category.create(name: "Streuparameter", subtitle: "Spannweite, Varianz, Standardabweichung und Variationskoeffizient",
                description: "Nun wo wir das Zentrum der Daten kennen, wie weit sind die Daten davon entfernt?",
                iconSrc: "/assets/images/streuparameter64.png")

cat3.tasks.create(name: "Lageparameter", description: "Eine Befragung nach der beliebtesten Kaffeemarke ergab folgendes Ergebnis. Was ist ein geeigneter Lageparameter für diesen Datensatz?", multiple_choice: true,
                  option_one: "Modalwert", option_two: "Median", option_three: "Arithmetisches Mittel",answer: "Modalwert",
                  image_src: "/assets/images/tasks/task1.png", correction: "Kaffeemarke ist nominal skaliert. Daher kann man nur den Modalwert nehmen.")

cat3.tasks.create(name: "Lageparameter", description: "Was wäre ein guter Lageparameter für deutsche Postleitzahlen?", multiple_choice: true,
                  option_one: "Modalwert", option_two: "Median", option_three: "Keiner",answer: "Keiner",
                  image_src: "-", correction: "Postleitzahlen sind nominal skaliert, es gibt keine logische Reihenfolge aus der man sicher Schlüsse ziehen kann.
                Der Modalwert macht aber auch keinen Sinn, da jede Postleitzahl genau einmal vorkommt und es daher keinen eindeutigen Modalwert gibt")