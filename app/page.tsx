import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Rocket, Palette, Type, Blocks } from "lucide-react";

const swatches = [
  { name: "primary", cls: "bg-primary text-primary-foreground" },
  { name: "secondary", cls: "bg-secondary text-secondary-foreground" },
  { name: "muted", cls: "bg-muted text-muted-foreground" },
  { name: "accent", cls: "bg-accent text-accent-foreground" },
  { name: "destructive", cls: "bg-destructive text-white" },
  { name: "card", cls: "bg-card text-card-foreground border" },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen px-6 py-10">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        {/* Header — font + tokens */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Shadcn/UI OK</Badge>
            <Badge variant="secondary">base-luma + mauve</Badge>
            <Badge variant="outline">vinext + Tailwind v4</Badge>
          </div>
          <h1 className="font-heading max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Démo Shadcn : couleurs, font et composants.
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-8">
            Cette page utilise les tokens du thème (<code className="bg-muted rounded px-1.5 py-0.5 text-sm">bg-primary</code>,{" "}
            <code className="bg-muted rounded px-1.5 py-0.5 text-sm">text-muted-foreground</code>,{" "}
            <code className="bg-muted rounded px-1.5 py-0.5 text-sm">font-heading</code>) et de vrais composants{" "}
            <code className="bg-muted rounded px-1.5 py-0.5 text-sm">@/components/ui</code> — plus de slate hardcodé.
          </p>
        </div>

        {/* Palette du thème */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="size-4" /> Palette du thème (mauve)
            </CardTitle>
            <CardDescription>
              Chaque pastille utilise un token CSS : si tu changes de baseColor dans{" "}
              <code>components.json</code>, tout suit.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {swatches.map((s) => (
                <div
                  key={s.name}
                  className={`flex h-20 flex-col justify-end rounded-2xl p-3 text-xs font-medium ${s.cls}`}
                >
                  {s.name}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 lg:grid-cols-2">
          {/* Boutons + badges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Blocks className="size-4" /> Boutons & badges
              </CardTitle>
              <CardDescription>Variants cva + Base UI sous le capot.</CardDescription>
              <CardAction>
                <Badge>6 variants</Badge>
              </CardAction>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Badge>default</Badge>
              <Badge variant="secondary">secondary</Badge>
              <Badge variant="outline">outline</Badge>
              <Badge variant="destructive">destructive</Badge>
            </CardFooter>
          </Card>

          {/* Formulaire */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="size-4" /> Font + formulaire
              </CardTitle>
              <CardDescription>
                Titre en <code>font-heading</code> (Geist via <code>--font-sans</code>), corps en{" "}
                <code>font-sans</code>.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="grid gap-2">
                <Label htmlFor="demo-email">Email</Label>
                <Input id="demo-email" type="email" placeholder="ada@flare2sky.dev" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <Label htmlFor="demo-notifs">Notifications</Label>
                <Switch id="demo-notifs" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Rocket className="size-4" /> Enregistrer
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Tabs + Dialog (interactifs, "use client") */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Onglets</CardTitle>
              <CardDescription>Composant client Base UI : clique pour vérifier l&apos;hydratation.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="apercu">
                <TabsList>
                  <TabsTrigger value="apercu">Aperçu</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="apercu" className="pt-3">
                  <Alert>
                    <AlertTitle>Ça marche !</AlertTitle>
                    <AlertDescription>
                      Si les onglets changent, le JS client vinext + Base UI fonctionne.
                    </AlertDescription>
                  </Alert>
                </TabsContent>
                <TabsContent value="code" className="pt-3">
                  <code className="bg-muted block rounded-xl p-3 text-xs">
                    {"<Tabs defaultValue=\"apercu\">…"}
                  </code>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dialogue</CardTitle>
              <CardDescription>Portal + overlay, test du client-side.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-3">
              <Dialog>
                <DialogTrigger render={<Button variant="outline" />}>Ouvrir le dialog</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog Shadcn</DialogTitle>
                    <DialogDescription>
                      Si cette modale s&apos;ouvre, Dialog + Portal + focus sont OK sous vinext.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button>Parfait</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>FS</AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground text-sm">Avatar + dialog côte à côte</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <nav className="flex flex-wrap gap-3">
          <a
            className="border-border bg-card rounded-full border px-4 py-2 text-sm font-medium hover:bg-muted"
            href="/api/hello"
          >
            API route → /api/hello
          </a>
          <a
            className="border-border bg-card rounded-full border px-4 py-2 text-sm font-medium hover:bg-muted"
            href="https://ui.shadcn.com"
            rel="noreferrer"
            target="_blank"
          >
            Docs Shadcn
          </a>
        </nav>
      </section>
    </main>
  );
}
