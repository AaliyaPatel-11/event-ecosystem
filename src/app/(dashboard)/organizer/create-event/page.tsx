"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: "",
    venue: "",
    date: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert("Event Created Successfully!");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Create Event
        </h1>

        <p className="text-zinc-400 mb-8">
          Create and manage your event details.
        </p>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6 space-y-6">
            <div>
              <label className="text-sm mb-2 block">
                Event Title
              </label>

              <Input
                name="title"
                placeholder="Enter event title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm mb-2 block">
                Venue
              </label>

              <Input
                name="venue"
                placeholder="Enter venue"
                value={formData.venue}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm mb-2 block">
                Event Date
              </label>

              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm mb-2 block">
                Description
              </label>

              <textarea
                name="description"
                placeholder="Describe your event"
                value={formData.description}
                onChange={handleChange}
                className="w-full min-h-[120px] rounded-md bg-zinc-950 border border-zinc-800 p-3 text-sm"
              />
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full"
            >
              Create Event
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}