import { useState } from "react";
import { Container, Heading, VStack, Button, Box, Text, Input, FormControl, FormLabel, Flex, Spacer } from "@chakra-ui/react";
import { useEvents, useAddEvent, useUpdateEvent, useDeleteEvent } from "../integrations/supabase/index.js";

const Events = () => {
  const { data: events, isLoading, isError } = useEvents();
  const addEvent = useAddEvent();
  const updateEvent = useUpdateEvent();
  const deleteEvent = useDeleteEvent();

  const [newEvent, setNewEvent] = useState({ name: "", date: "" });
  const [editingEvent, setEditingEvent] = useState(null);

  const handleAddEvent = () => {
    addEvent.mutate(newEvent);
    setNewEvent({ name: "", date: "" });
  };

  const handleUpdateEvent = (event) => {
    updateEvent.mutate(event);
    setEditingEvent(null);
  };

  const handleDeleteEvent = (eventId) => {
    deleteEvent.mutate(eventId);
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error loading events</Text>;

  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" size="xl" mb={4}>Events</Heading>
      <VStack spacing={4} align="stretch">
        {events.map((event) => (
          <Box key={event.id} p={4} borderWidth="1px" borderRadius="md">
            {editingEvent?.id === event.id ? (
              <VStack spacing={2} align="stretch">
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    value={editingEvent.name}
                    onChange={(e) => setEditingEvent({ ...editingEvent, name: e.target.value })}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Date</FormLabel>
                  <Input
                    type="date"
                    value={editingEvent.date}
                    onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
                  />
                </FormControl>
                <Button colorScheme="teal" onClick={() => handleUpdateEvent(editingEvent)}>
                  Save
                </Button>
              </VStack>
            ) : (
              <Flex align="center">
                <Box>
                  <Text fontSize="lg" fontWeight="bold">{event.name}</Text>
                  <Text>{event.date}</Text>
                </Box>
                <Spacer />
                <Button size="sm" colorScheme="teal" onClick={() => setEditingEvent(event)}>
                  Edit
                </Button>
                <Button size="sm" colorScheme="red" ml={2} onClick={() => handleDeleteEvent(event.id)}>
                  Delete
                </Button>
              </Flex>
            )}
          </Box>
        ))}
      </VStack>
      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>Add New Event</Heading>
        <VStack spacing={2} align="stretch">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              value={newEvent.name}
              onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            />
          </FormControl>
          <Button colorScheme="teal" onClick={handleAddEvent}>
            Add Event
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Events;