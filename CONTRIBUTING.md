# Afspraken over samenwerking
[Figma](https://www.figma.com/design/zsrLhtyXdZ4oehOyeBvTDR/Untitled?node-id=0-1&t=uEoXInM6LWD9o8cZ-1)
<img width="4756" height="3364" alt="image" src="https://github.com/user-attachments/assets/1e13a37f-5001-4474-bf97-e53e07406867" />


## Git afspraken
### Taal
Documenteer in het engels (issues, commit messages etc)

## Code conventies

### Ademruimte

In onze code maken we gebruik van ademruimte dat ervoor zorgt dat het lezen van code leesbaar is en te volgen is. Na elke element wordt een witregel gemaakt om het element duidelijk scheidbaar te tonen. En elementen in een elementen worden met 1 tab uitgespreid om te laten zien dat het in het parent element hoort.

**Voorbeeld**

```css
* {
    margin: 0;
    box-sizing: border-box;
    font-family: Inter;
}

@media (prefers-reduced-motion: no-preference) {
    @view-transition {
        navigation: auto;
    }

    :root {
        view-transition-name:none;
    }
}
```

### Volgorde HTML en CSS nesting

Bij onze code conventies houden rekening met de vologorde van de HTML structuur die ook in het CSS bestand op volgorde wordt gehouden, hierdoor wordt het lezen van code volgbaar en leesbaar. In onze CSS bestand nesten we code die in het parent element/class horen. Dit zorgt voor een duidelijke structuur dat het lezen makkelijker maakt.

### Custom properties

We maken gebruik van custom-properties zodat we niet steeds code hoeven te herhalen (DRY). De custom properties krijgen een duidelijke naamgeving in kebabcase zoals `--head-accent-`.

### Class naamgeving

De classes die wij aanmaken worden allemaal in het Engels geschreven met kebab-cases. Dit maakt het lezen makkelijker omdat je een scheiding maakt tussen woorden die niet leesbaar zijn aan elkaar.
