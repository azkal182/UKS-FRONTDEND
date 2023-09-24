"use client";
import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";

const FloatingButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <Button
        onPress={onOpen}
        isIconOnly
        className="fixed md:hidden w-12 h-12 bg-blue-500 right-6 bottom-20 rounded-full shadow"
      >
        <HiOutlinePlus className="w-6 h-6 stroke-[1.5]" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Data
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Name"
                  placeholder="Enter your Name"
                  variant="bordered"
                  labelPlacement="outside"
                />
                <Input
                  label="Address"
                  placeholder="Enter your address"
                  variant="bordered"
                  labelPlacement="outside"
                />
                <Select
                  placeholder="Select an hostel"
                  labelPlacement="outside"
                  label="Select an hostel"
                  className="max-w-xs"
                >
                  <SelectItem key="1" value="TAKHOSUS">
                    TAKHOSUS
                  </SelectItem>
                </Select>
                <Input
                  label="Grade"
                  placeholder="Enter your garde"
                  variant="bordered"
                  labelPlacement="outside"
                />
                <Input
                  label="Complaint"
                  placeholder="Enter your complaint"
                  variant="bordered"
                  labelPlacement="outside"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FloatingButton;
