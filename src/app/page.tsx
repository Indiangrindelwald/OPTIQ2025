import React from "react";
import {
  Heading,
  Text,
  Button,
  Icon,
  InlineCode,
  Logo,
  Input,
  Avatar,
  AvatarGroup,
  Textarea,
  PasswordInput,
  SegmentedControl,
  SmartLink,
  Dialog,
  Feedback,
  SmartImage,
  Line,
  LogoCloud,
  Background,
  Select,
  useToast,
  Card,
  Fade,
  StatusIndicator,
  DateRangePicker,
  DateRange,
  TiltFx,
  HoloFx,
  IconButton,
  TagInput,
  Switch,
  Column,
  Carousel,
  Row,
  Tag,
  RevealFx,
  LetterFx,
  Flex,
  Grid,
  StyleOverlay,
} from "@/once-ui/components";
import { CodeBlock } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";
import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export default function Home() {
  return (
    <Column maxWidth="l" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Photonics Topics and Features",
            description: home.description,
            url: `https://${baseURL}/`,
            itemListElement: [
              ...home.topics.map((topic, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "CreativeWork",
                  name: topic.title,
                  description: topic.description,
                  image: {
                    "@type": "ImageObject",
                    url: `${baseURL}${topic.imgSrc}`,
                    description: topic.title,
                  },
                },
              })),
              ...home.features.map((feature, index) => ({
                "@type": "ListItem",
                position: home.topics.length + index + 1,
                item: {
                  "@type": "CreativeWork",
                  name: feature.title,
                  description: feature.description,
                  image: {
                    "@type": "ImageObject",
                    url: `${baseURL}${feature.imgSrc}`,
                    description: feature.title,
                  },
                },
              })),
            ],
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Background
        fill={true}
        minHeight={16}
        radius="l"
      >
        <Background
          position="absolute"
          mask={{
            cursor: true
          }}
          gradient={{
            colorEnd: 'static-transparent',
            colorStart: 'accent-solid-strong',
            display: false,
            height: 100,
            opacity: 100,
            tilt: 0,
            width: 150,
            x: 0,
            y: 0
          }}
          dots={{
            color: 'accent-on-background-medium',
            display: true,
            opacity: 100,
            size: '64'
          }}
          grid={{
            color: 'neutral-alpha-medium',
            display: true,
            height: 'var(--static-space-32)',
            opacity: 100,
            width: 'var(--static-space-32)'
          }}
          lines={{
            display: true,
            opacity: 100,
            size: '24'
          }}
        />
      </Background>
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button id="about" data-border="rounded" href="/about" variant="secondary" size="m" arrowIcon>
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }} src={person.avatar} size="m" />
                )}
                Know More
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      
      <Column>
        <Carousel
          aspectRatio="16 / 9"
          indicator="line"
          images={[
            {
              alt: 'Sample image 1',
              src: '/images/projects/project-01/Hall_(3).jpg'
            },
            {
              alt: 'Sample image 2',
              src: '/images/projects/project-01/Hall_(1).jpg'
            },
            {
              alt: 'Sample image 3',
              src: '/images/projects/project-01/Hall_(2).jpg'
            },
            {
              alt: 'Sample 4',
              src: '/images/projects/project-01/Hall_(4).jpg'
            },
          ]}
          />
        <Flex fillWidth={true} paddingX="20" paddingTop="m" paddingY="24" gap="8" direction="row">
          <Text variant="heading-strong-l">
            OPTIQ 2023 - An all India photonics conferenece
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            These are some of the images of the OPTIQ 2023, which was held at Cusat. 
            Professionals from all around the world gave talks on the work along with interactive Q&A sessions.
          </Text>
        </Flex>
      </Column>
        

      {/* Photonics Topics Section */}
      <Column 
        border="neutral-alpha-weak" 
        paddingX="20" 
        radius="xl" 
        overflow="hidden" 
        paddingY="m" 
        fillWidth 
        position="relative"
      >
        <Column horizontal="center" gap="48" fillWidth position="relative">
          <Heading align="center" as="h2" variant="display-default-l">
            Photonics Topics
          </Heading>
        </Column>
        <Grid
          columns={3} // Default for larger screens
          gap="24"
          fillWidth
          paddingTop="m"
          wrap
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Responsive grid
          }}
        >
          {home.topics.map((topic, index) => (
            <TiltFx key={index} paddingX="8">
              <Card
                maxWidth={24} // Container width constraint
                radius="l-4" // Larger radius for outer card
                direction="column" // Vertical stacking
              >
                {topic.imgSrc && (
                  <SmartImage // Corrected from Card to SmartImage
                    sizes="640px" // Fixed size hint
                    fillWidth={true} // Full width of card
                    aspectRatio="4 / 3" // Consistent aspect ratio
                    radius="l"
                    bottomLeftRadius="xs"
                    bottomRadius="xs"
                    src={topic.imgSrc}
                    alt={topic.alt || topic.title}
                  />
                )}
                <Flex fillWidth={true} paddingX="20" paddingY="24" gap="8" direction="column">
                  <Text variant="body-default-m" >
                    {topic.title}
                  </Text>
                  {topic.description && (
                    <Text onBackground="neutral-weak" variant="body-default-s">
                      {topic.description}
                    </Text>
                  )}
                </Flex>
              </Card>
            </TiltFx>
          ))}
        </Grid>
      </Column>

      {/* Quick Start Section */}
      <Column
        border="neutral-alpha-weak"
        paddingX="32"
        radius="xl"
        overflow="hidden"
        paddingY="160"
        fillWidth
        position="relative"
      >
        <Background
          mask={{ x: 100, y: 0 }}
          position="absolute"
          grid={{ display: true, color: "neutral-alpha-medium", width: "2rem", height: "2rem" }}
        />
        <Background
          mask={{ x: 0, y: 100, radius: 100 }}
          position="absolute"
          grid={{ display: true, color: "brand-alpha-strong", width: "12", height: "12" }}
          gradient={{
            display: true,
            opacity: 100,
            height: 100,
            width: 100,
            tilt: 0,
            x: 0,
            y: 100,
            colorStart: "brand-solid-strong",
            colorEnd: "brand-background-medium",
          }}
        />
        <Column horizontal="center" gap="48" fillWidth position="relative">
          <Heading align="center" as="h2" variant="display-default-l">
            Quick Start
          </Heading>
          <CodeBlock
            compact
            maxWidth={40}
            codeInstances={[{ code: `git clone https://github.com/once-ui-system/nextjs-starter.git`, language: "tsx", label: "tsx" }]}
          />
        </Column>
        <Grid columns={3} gap="24" fillWidth>
          {home.features.map((feature, index) => (
            <TiltFx key={index} paddingX="8">
              <Card
                padding="l"
                border="neutral-strong"
                radius="xl"
                style={{
                  width: "100%",
                  height: "300px",
                  aspectRatio: "4 / 3",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: feature.imgPosition === "top" ? "space-between" : "space-between",
                }}
              >
                <Flex fillWidth gap="l" direction="column" alignItems="center">
                  {feature.imgSrc && (
                    <Flex
                      border="neutral-medium"
                      radius="m"
                      minWidth="100%"
                      height="60%"
                      style={{ order: feature.imgPosition === "top" ? 0 : 1 }}
                    >
                      <SmartImage
                        enlarge
                        radius="m"
                        sizes="100%"
                        alt={feature.title}
                        src={feature.imgSrc}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </Flex>
                  )}
                  <Column gap="4" alignItems="center" style={{ order: feature.imgPosition === "top" ? 1 : 0 }}>
                    <Text variant="heading-strong-l" align="center">
                      {feature.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak" align="center">
                      {feature.description}
                    </Text>
                  </Column>
                </Flex>
              </Card>
            </TiltFx>
          ))}
        </Grid>
      </Column>

      

      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}

      <Projects range={[2]} />

      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}