"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Upload } from "lucide-react";
import { contactData } from "@/data/dummy/contactData";
import Navigation from "@/components/common/navigation";
import Footer from "@/components/common/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    file: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We'll get back to you within 24 hours.");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center w-full ">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 ">Contact Us</h1>
            <p className="text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto w-full">
              Get in touch with our experts for personalized welding solutions
              and competitive quotes.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto">
        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container bg-white  mx-auto px-4">
            <div className="grid md:grid-cols-2  gap-8 mb-16 max-w-7xl w-full mx-auto">
              <Card className="text-center shadow-none text-black border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100">
                <CardContent className="p-8 max-w-xs w-full m-auto">
                  <Phone className="h-10 w-10 p-3 bg-red-600 rounded-full mx-auto mb-4 text-red-50" />
                  <h3 className="text-xl font-bold 0 mb-2">Phone</h3>
                  <p className=" mb-2">Call us directly</p>
                  <p className="text-lg font-semibold  break-all">
                    {contactData.phone.number}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-none text-black border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100">
                <CardContent className="p-8 max-w-xs w-full m-auto">
                  <Mail className="h-10 w-10 p-3 bg-red-600 rounded-full mx-auto mb-4 text-red-50" />
                  <h3 className="text-xl font-bold  mb-2">Email</h3>
                  <p className=" mb-2">{contactData.email.description}</p>
                  <p className="text-lg font-semibold break-all">
                    {contactData.email.address}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-none text-black border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100">
                <CardContent className="p-8 max-w-xs w-full m-auto">
                  <MapPin className="h-10 w-10 p-3 bg-red-600 rounded-full mx-auto mb-4 text-red-50" />
                  <h3 className="text-xl font-bold  mb-2">Address</h3>
                  <p className=" mb-2">{contactData.address.description}</p>
                  <p className="text-sm ">{contactData.address.street}</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-none text-black border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100">
                <CardContent className="p-8 max-w-xs w-full m-auto">
                  <Clock className="h-10 w-10 p-3 bg-red-600 rounded-full mx-auto mb-4 text-red-50" />
                  <h3 className="text-xl font-bold  mb-2">Hours</h3>
                  <p className=" mb-2">{contactData.hours.description}</p>
                  <p className="text-sm ">
                    {contactData.hours.weekdays}
                    <br />
                    {contactData.hours.saturday}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <Card className="border shadow-none  h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-neutral-900">
                    Send us an Enquiry
                  </CardTitle>
                  <p className="text-neutral-600">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                  <div className="flex items-center space-x-2 text-neutral-900 font-semibold">
                    <Phone className="h-4 w-4" />
                    <span>For urgent enquiries: {contactData.urgentPhone}</span>
                  </div>
                </CardHeader>
                <CardContent className="h-full">
                  <form
                    onSubmit={handleSubmit}
                    className="h-full flex flex-col gap-6 justify-between"
                  >
                    <div className="flex flex-col gap-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            // placeholder="Enter your email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }))
                            }
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                company: e.target.value,
                              }))
                            }
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              subject: e.target.value,
                            }))
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              message: e.target.value,
                            }))
                          }
                          className="mt-1"
                          placeholder="Please describe your welding requirements, project details, or any specific questions you have..."
                        />
                      </div>

                      <div>
                        <Label htmlFor="file">Attach File (Optional)</Label>
                        <div className="mt-1 flex items-center space-x-2">
                          <Input
                            id="file"
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() =>
                              document.getElementById("file")?.click()
                            }
                            className="flex items-center space-x-2"
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            <span>Choose File</span>
                          </Button>
                          {formData.file && (
                            <span className="text-sm text-neutral-600">
                              {formData.file.name}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-500 mt-1">
                          Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 flex items-end justify-end">
                      <Button type="submit" className="w-fit text-white ">
                        Send Enquiry
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Map and Additional Info */}
              <div className="space-y-8">
                <Card className="border bg-white shadow-none">
                  <CardHeader>
                    <CardTitle className="text-xl text-neutral-900">
                      Visit Our Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-w-16 aspect-video bg-neutral-200 rounded-lg mb-4 flex items-center justify-center">
                      <iframe
                        src={contactData.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                      ></iframe>
                    </div>
                    <div className="space-y-2 text-sm text-neutral-600">
                      <p>
                        <strong>Address:</strong> {contactData.address.street}
                      </p>
                      <p>
                        <strong>Parking:</strong> Free parking available on-site
                      </p>
                      <p>
                        <strong>Public Transport:</strong> Metro Station 2
                        blocks away
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-red-700 to-red-500">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">
                      Why Choose Us?
                    </h3>
                    <ul className="space-y-2 text-sm text-neutral-100">
                      {contactData.whyChooseUs.map((item, index) => (
                        <li key={index}>✓ {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
