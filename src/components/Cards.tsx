import React from "react";
import { Column, Text, Button, Flex } from "@/once-ui/components";

interface CardProps {
  title: string;
  description: string;
  href?: string;
}

export function Card({ title, description, href }: CardProps) {
  return (
    <Column
      padding="m"
      border="1px solid var(--border-color)"
      borderRadius="m"
      background="surface"
      gap="s"
      shadow="m"
    >
      <Text variant="heading-default-m">{title}</Text>
      <Text onBackground="neutral-weak">{description}</Text>
      {href && (
        <Flex horizontal="end">
          <Button href={href} variant="secondary" size="s">
            Learn More
          </Button>
        </Flex>
      )}
    </Column>
  );
}
