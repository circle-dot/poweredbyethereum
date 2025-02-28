"use client";

import React, { ComponentProps, useEffect, useState } from "react";
import {
  Heading,
  Text,
  Button,
  Logo,
  SmartLink,
  Line,
  LogoCloud,
  Background,
  Fade,
  Column,
  Row,
} from "@/once-ui/components";

import projects from "@/app/resources/projects";

type LogoProps = ComponentProps<typeof Logo>;

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if window exists (client-side)
    if (typeof window !== "undefined") {
      // Initial check
      setIsDesktop(window.innerWidth >= 768);

      // Add resize listener
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 768);
      };

      window.addEventListener("resize", handleResize);

      // Clean up
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const logos = [
    "/images/logo-2.png",
    "/images/logo-1.png",
    "/images/logo-4.png",
    "/images/logo-3.png",
    "/images/logo-6.png",
    "/images/logo-5.png",
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
          paddingRight="32"
          paddingLeft="32"
          paddingY="40"
        >
          <img src="/images/logo-dark.png" alt="powered by ethereum" style={{ width: "100%", maxWidth: "200px", height: "auto" }} />
          {isDesktop && <Button
            href="https://www.figma.com/community/file/1469380523456045740/powered-by-ethereum"
            variant="primary"
            style={{
              color: "#fff",
              borderRadius: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              transition: "background 0.3s ease",
              background: "linear-gradient(90deg, #3AC6FF 0%, #5B69CB 100%)",
            }}
            className="hide-mobile"
            onMouseLeave={(e: any) => {
              e.currentTarget.style.background = "linear-gradient(90deg, #3AC6FF 0%, #5B69CB 100%)";
            }}
            onMouseEnter={(e: any) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Access Figma Assets
          </Button>}
        </Row>
      </Row>
      <Row fillWidth horizontal="center" style={{ marginTop: "40px" }} />
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
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
          zIndex={1}
        >
          <Column fillWidth horizontal="center" gap="32" padding="32" position="relative">
            <Heading wrap="balance" variant="display-default-l" align="center" marginBottom="16">
              Ethereum
              <br />
              the world computer
            </Heading>

            <Column fillWidth horizontal="center" gap="16">
              {
                isDesktop ? (
                  // Desktop view: Two columns
                  logos.reverse().map((logo, index) => (
                    index % 2 === 0 ? (
                      <Row key={index} fillWidth horizontal="center" gap="16">
                        <img
                          src={logo}
                          alt={`logo-${index + 1}`}
                          style={{ width: "250px", height: "auto", borderRadius: "12px", margin: "8px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
                        />
                        {logos[index + 1] && (
                          <img
                            src={logos[index + 1]}
                            alt={`logo-${index + 2}`}
                            style={{ width: "250px", height: "auto", borderRadius: "12px", margin: "8px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
                          />
                        )}
                      </Row>
                    ) : null
                  ))
                ) : (
                  // Mobile view: Single column
                  logos.reverse().map((logo, index) => (
                    <Row key={index} fillWidth horizontal="center">
                      <img
                        src={logo}
                        alt={`logo-${index + 1}`}
                        style={{ width: "250px", height: "auto", borderRadius: "12px", margin: "8px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
                      />
                    </Row>
                  ))
                )
              }
            </Column>

            <Button
              id="accessFigma"
              target="_blank"
              label="View Assets"
              href="https://github.com/circle-dot/poweredbyethereum"
              variant="secondary"
              arrowIcon
            />
            <Column horizontal="center" paddingTop="64" fillWidth gap="24">
              <Line maxWidth={4} marginBottom="16" background="neutral-alpha-medium" />
              <Row position="relative" textVariant="display-default-m" align="center">
                Projects powered by Ethereum
              </Row>
              <Button
                id="addProject"
                target="_blank"
                label="Add your project"
                href="https://github.com/circle-dot/poweredbyethereum"
                variant="secondary"
                arrowIcon
              />
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
