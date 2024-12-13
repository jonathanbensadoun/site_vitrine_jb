import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "Lagny-sur-marne, France",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+33 6 20 93 24 03",
  },
  {
    icon: Mail,
    title: "Email",
    content: "jo.bensadoun@gmail.com",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun-Ven: 9h-18h",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Informations de contact</h2>
        <p className="text-muted-foreground">
          N&apos;hésitez pas à me contacter pour discuter de votre projet ou
          pour toute question.
        </p>
      </div>
      <div className="grid gap-6">
        {contactInfo.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title}>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
