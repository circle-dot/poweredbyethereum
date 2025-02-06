"use client";

import React, { ComponentProps } from "react";
import {
  Heading,
  Text,
  Button,
  Icon,
  InlineCode,
  Logo,
  SmartLink,
  Line,
  LogoCloud,
  Background,
  Card,
  Fade,
  IconButton,
  Column,
  Row,
} from "@/once-ui/components";

import projects from "@/app/resources/projects";

type LogoProps = ComponentProps<typeof Logo>;

export default function Home() {

  const links = [
    {
      href: "https://poweredbyethereum.org/docs/security",
      title: "Security",
      description: "Learn about decentralized security",
    },
    {
      href: "https://poweredbyethereum.org/docs/interoperability",
      title: "Interoperability",
      description: "Integrate with Ethereum-based tools",
    },
    {
      href: "https://poweredbyethereum.org/docs/community",
      title: "Community",
      description: "Join the Ethereum community",
    },
  ];

  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "4",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
      <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
        <Row
          data-border="rounded"
          horizontal="space-between"
          maxWidth="l"
          paddingRight="64"
          paddingLeft="32"
          paddingY="20"
        >
          <img src="/images/logo-dark.png" alt="powered by ethereum" style={{ width: "200px", height: "auto" }} />
          <Row gap="12" hide="s">
          </Row>
          <Row gap="16" show="s" horizontal="center" paddingRight="24">
            <IconButton
              href="https://github.com/circle-dot/poweredbyethereum"
              icon="github"
              variant="tertiary"
            />
          </Row>
        </Row>
      </Row>
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              opacity: 100,
              tilt: -35,
              height: 20,
              width: 120,
              x: 120,
              y: 35,
              colorStart: "brand-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Column fillWidth horizontal="center" gap="32" padding="32" position="relative">
            <Heading wrap="balance" variant="display-default-l" align="center" marginBottom="16">
              Ethereum
              <br />
              the world computer
            </Heading>
            <Button
              id="readDocs"
              target="_blank"
              label="Start building"
              href="https://ethereum.org/en/developers/"
              variant="secondary"
              arrowIcon
            />
            <Column horizontal="center" paddingTop="64" fillWidth gap="24">
              <Line maxWidth={4} marginBottom="16" background="neutral-alpha-medium" />

              <Heading marginBottom="12" as="h2" align="center" variant="heading-default-l">
                Projects powered by Ethereum:
              </Heading>
              <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8" zIndex={1}>
                <a href="https://github.com/circle-dot/poweredbyethereum" target="_blank" rel="noopener noreferrer">
                  <Text onBackground="brand-strong">
                    Showcase your
                  </Text>
                  <Text onBackground="brand-medium" marginX="8">
                    onchain
                  </Text>
                  <Text onBackground="brand-strong">
                    project
                  </Text>
                </a>
              </InlineCode>
              <LogoCloud
                paddingBottom="104"
                columns="3"
                mobileColumns="1"
                limit={3}
                fillWidth
                logos={projects as LogoProps[]}
              />
            </Column>
          </Column>
        </Column>
        <Row
          fillWidth
          paddingX="32"
          paddingTop="160"
          minHeight={28}
          paddingBottom="80"
          horizontal="center"
          vertical="end"
        >
          <Background
            mask={{
              x: 50,
              y: 100,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
          />
          <Row position="relative" textVariant="display-default-m" align="center">
            Learn more
          </Row>
        </Row>
        <Row fillWidth overflow="hidden">
          <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium"></Row>
          <Row fillWidth border="neutral-alpha-weak" mobileDirection="column">
            {links.map((link, index) => (
              <SmartLink unstyled fillWidth target="_blank" key={link.href} href={link.href}>
                <Card
                  fillWidth
                  padding="40"
                  gap="8"
                  direction="column"
                  background={undefined}
                  borderRight={index < links.length - 1 ? "neutral-alpha-weak" : undefined}
                  border={undefined}
                  radius={undefined}
                >
                  <Row fillWidth center gap="12">
                    <Text variant="body-strong-m" onBackground="neutral-strong">
                      {link.title}
                    </Text>
                    <Icon size="s" name="arrowUpRight" />
                  </Row>
                  <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                    {link.description}
                  </Text>
                </Card>
              </SmartLink>
            ))}
          </Row>
          <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium"></Row>
        </Row>
        <Row
          position="relative"
          as="footer"
          fillWidth
          paddingX="l"
          paddingTop="128"
          paddingBottom="80"
        >
          <Background
            borderTop="brand-alpha-strong"
            mask={{
              x: 50,
              y: 0,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
          />
          <Column
            position="relative"
            textVariant="body-default-xs"
            onBackground="neutral-medium"
            horizontal="center"
            align="center"
            fillWidth
            gap="16"
          >
            <Logo wordmark={false} size="s" />
            <Text size="m">
              <Text onBackground="neutral-weak">{new Date().getFullYear()} /</Text> Powered by Ethereum
            </Text>
            <SmartLink href="https://github.com/ethereum/ethereum-starter?tab=MIT-1-ov-file">
              MIT License
            </SmartLink>
          </Column>
        </Row>
      </Column>
    </Column>
  );
}
