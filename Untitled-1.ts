import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Checkbox } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import { CalendarToday } from "@mui/icons-material";

export default function AutomobileServiceApp() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

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

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Automobile Service Provider</h1>
      <Tabs>
        <TabsList>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="accessories">Accessories</TabsTrigger>
          <TabsTrigger value="partner">Choose Partner</TabsTrigger>
          <TabsTrigger value="schedule">Schedule Service</TabsTrigger>
        </TabsList>
        
        <TabsContent value="maintenance">
          <Card>
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

        <TabsContent value="accessories">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Select Accessories</h2>
              <p>To be added</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="partner">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Choose a Partner</h2>
              <p>To be added</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="schedule">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Select a Date & Time</h2>
              <CalendarToday />
              <Button className="mt-4">Notify Me</Button>
              <Button className="mt-2 bg-red-500 text-white">Cancel Order</Button>
              <h2 className="text-xl font-semibold mt-4 mb-2">Select Type of Service</h2>
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
      </Tabs>
      
      <Button className="mt-4">Confirm Booking</Button>
    </div>
  );
}
