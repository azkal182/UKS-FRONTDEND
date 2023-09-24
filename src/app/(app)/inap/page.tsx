"use client";
import {
  Button,
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { HiPlus, HiPrinter, HiDocumentText } from "react-icons/hi";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

export default function InapPage() {
  const { data: session } = useSession();
  const [query, setQuery] = useState("");
  const [patient, setPatients] = useState([]);

  const getPatients = async () => {
    const { data } = await axios("http://localhost:8000/api/inaps", {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });

    setPatients(data.data);
  };

  useEffect(() => {
    if (session) {
      getPatients();
    }
  }, [session]);

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
        Action name
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => console.info("swipe action triggered")}
      >
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <main>
      {/* <h1>Screen Size Detection with React Hook</h1>
            <p>Width: {screenSize.width}</p>
            <p>Height: {screenSize.height}</p> */}
      <h1 className="text-center text-lg font-bold">Daftar Santri di UKS</h1>

      <div className="hidden md:flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <Button>Add People</Button>
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly>
                <HiPlus />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem startContent={<HiPrinter />}>Print</DropdownItem>
              <DropdownItem startContent={<HiDocumentText />}>
                Export Excel
              </DropdownItem>
              <DropdownItem startContent={<HiDocumentText />}>
                Export PDF
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="text-sm">Showing 1 to 10 of 150 entries</div>
        <div>
          <Input placeholder="Search" />
        </div>
      </div>

      <div className="flex md:hidden items-center justify-between py-4">
        <Input
          placeholder="Search"
          onValueChange={(value) => setQuery(value)}
        />
      </div>

      <div className="block  md:hidden space-y-2">
        <SwipeableList>
          {/* @ts-ignore */}
          {patient.map((item: any, index: number) => (
            <SwipeableListItem
              maxSwipe={1}
              key={item.id}
              leadingActions={leadingActions()}
              trailingActions={trailingActions()}
            >
              {/* <Card>
                <CardBody className="p-2">
                  <div className="flex items-center">
                    <div className="w-8 flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="mr-auto">
                      <div className="uppercase font-bold">
                        {item.patient.name} ({item.patient.address})
                      </div>
                      <div>
                        <div className="text-sm capitalize">
                          {item.patient.hostel}{" "}
                          <b>
                            {item.patient.grade
                              ? ` - kelas (${item.patient.grade})`
                              : " - (TIDAK SEKOLAH)"}
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="w-20 text-center capitalize">
                      {item.complaint}
                    </div>
                  </div>
                </CardBody>
              </Card> */}
            </SwipeableListItem>
          ))}
        </SwipeableList>
      </div>

      <Table
        className="hidden md:block"
        color={"default"}
        selectionMode="single"
        // defaultSelectedKeys={["2"]}
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>NO</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ALAMAT</TableColumn>
          <TableColumn>ASRAMA</TableColumn>
          <TableColumn>KELAS</TableColumn>
          <TableColumn>KELUHAN</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          {patient.map((item: any, index: number) => (
            <TableRow key={item.id} className="capitalize">
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.patient.name}</TableCell>
              <TableCell>{item.patient.address}</TableCell>
              <TableCell>{item.patient.hostel}</TableCell>
              <TableCell>{item.patient.grade}</TableCell>
              <TableCell>{item.keluahan}</TableCell>
              <TableCell className="text-center">{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
