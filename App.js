import { Button, Card, CardContent, Checkbox } from "@mui/material";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React, { useState } from "react";
import "./App.css";

export default function AutomobileServiceApp() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDateTime, setSelectedDateTime] = useState("");

  const services = [
    "General Service",
    "PPF Coating",
    "Buffing",
    "Polishing",
    "Shining",
    "Pick Up Service",
  ];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleDateTimeChange = (event) => {
    setSelectedDateTime(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Automobile Service Provider</h1>

      <Tabs>
        <TabsList className="tabs-list">
          <TabsTrigger value="maintenance" className="tab">Maintenance</TabsTrigger>
          <TabsTrigger value="accessories" className="tab">Accessories</TabsTrigger>
          <TabsTrigger value="partner" className="tab">Choose Partner</TabsTrigger>
          <TabsTrigger value="schedule" className="tab">Schedule Service</TabsTrigger>
        </TabsList>

        {/* Maintenance Services Tab */}
        <TabsContent value="maintenance">
          <Card className="card">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Select Maintenance Services</h2>
              {services.map((service) => (
                <div key={service} className="flex items-center space-x-2 mb-2">
                  <Checkbox
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                  />
                  <span>{service}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Accessories Tab */}
        <TabsContent value="accessories">
          <Card className="card">
            <CardContent>
              <h2>Select Accessories</h2>
              <p>Accessories will be added here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Choose Partner Tab */}
        <TabsContent value="partner">
          <Card className="card">
            <CardContent>
              <h2>Choose a Partner</h2>
              <p>Partners will be added here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Schedule Service Tab */}
        <TabsContent value="schedule">
          <Card className="card">
            <CardContent>
              <h2>Schedule Service</h2>
              <div className="scheduler-container">
                <input
                  type="datetime-local"
                  value={selectedDateTime}
                  onChange={handleDateTimeChange}
                />
                <p>Selected Date and Time: {selectedDateTime || "None"}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Button className="confirm-button">Confirm Booking</Button>
    </div>
  );
}
