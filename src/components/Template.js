import React from 'react';
import {
  Flex,
  ButtonGroup,
  Button,
  Heading,
  IconButton
} from '@chakra-ui/core';

const Template = ({
  id,
  starttime,
  endtime,
  summary,
  description,
  selected,
  templateFormOpen,
  setTemplateFormOpen,
  applyTemplate,
  handleDelete
}) => {
  const openTemplate = () => {
    setTemplateFormOpen(!templateFormOpen);
  };

  return (
    <Flex direction="column" align="center" justify="center" my={2}>
      <Heading fontSize="sm" fontWeight="normal">
        {summary}
      </Heading>
      <Heading fontSize="sm" fontWeight="normal">
        {starttime}-{endtime}
      </Heading>
      <Flex>
        <ButtonGroup spacing={4}>
          <Button size="sm" variantColor="blue" onClick={() => openTemplate()}>
            Choose Dates
          </Button>
          <IconButton
            variantColor="red"
            aria-label="Delete"
            size="sm"
            icon="close"
            onClick={() => handleDelete(id)}
          />
        </ButtonGroup>
      </Flex>

      {templateFormOpen && (
        <button
          onClick={() =>
            applyTemplate(summary, description, starttime, endtime, selected)
          }
        >
          Apply Template
        </button>
      )}
    </Flex>
  );
};

export default Template;
