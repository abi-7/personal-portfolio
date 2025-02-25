'use client'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export default function CardDefault() {
    return (
    <div className="flex justify-end mr-[150px]">
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative ">
          <img
            src="/images/linkedin.jpeg"
            alt="profile-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
           Hi there!
          </Typography>
        </CardBody>
      </Card>
      </div>
    );
  }