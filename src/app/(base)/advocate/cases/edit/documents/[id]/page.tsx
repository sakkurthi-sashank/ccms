'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createClient } from '@/utils/supabase/client'
import { X } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function EditDocumentPage() {
  const [file, setFile] = useState<File | null>(null)
  const [inputValue, setInputValue] = useState('') // State to hold the input value
  const { id } = useParams<{ id: string }>()
  const [success, setSuccess] = useState(false)

  const [previousDocuments, setPreviousDocuments] = useState<
    | {
        case_id: string | null
        created_at: string
        document_name: string
        document_url: string
        id: string
      }[]
    | null
  >(null)

  const supabase = createClient()

  useEffect(() => {
    const fetchDocuments = async () => {
      const { data, error } = await supabase
        .from('case_documents')
        .select('*')
        .eq('case_id', id)

      if (error) {
        console.error(error)
        return
      }

      setPreviousDocuments(data)
    }

    fetchDocuments()
  }, [id, success])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFile(file)
      setInputValue(e.target.value) // Update the input value state
    }
  }

  const handleUpload = async () => {
    if (!file) {
      console.error('No file selected.')
      return
    }

    const filePath = `case-${id}/${file.name}`

    const { error: uploadError } = await supabase.storage
      .from('evidence')
      .upload(filePath, file)

    if (uploadError) {
      console.error(uploadError)
      return
    }

    const { data } = await supabase.storage
      .from('evidence')
      .getPublicUrl(filePath)

    await supabase.from('case_documents').insert({
      document_url: data?.publicUrl,
      document_name: file.name ?? '',
      case_id: id,
    })

    setSuccess(true)
    setFile(null)
    setInputValue('') // Clear the input field after successful upload
  }

  const deleteDocument = async (documentId: string) => {
    await supabase.from('case_documents').delete().eq('id', documentId)
    await supabase.storage.from('evidence').remove([`case-${id}/${documentId}`])
    setSuccess(true)
  }

  return (
    <Card className="mx-auto mb-20 mt-5 max-w-4xl">
      <CardHeader>
        <CardTitle>Edit case documents for {id}</CardTitle>
        <CardDescription>
          Please fill out the form below to edit the case details.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        {previousDocuments?.length === 0 && (
          <div className="flex h-20 w-full items-center justify-center text-center">
            No documents found.
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {previousDocuments?.map((document) => (
            <div
              key={document.id}
              className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-6 py-4 shadow-sm"
            >
              <a
                href={document.document_url}
                target="_blank"
                className="block w-full truncate font-mono font-medium text-blue-600 hover:text-blue-800"
              >
                {document.document_name}
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteDocument(document.id)}
              >
                <X size={16} />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-10 grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input
            id="picture"
            type="file"
            accept=".pdf"
            value={inputValue} // Bind the input value to the state
            onChange={handleFileChange}
          />

          <div className="flex justify-end space-x-4">
            <Button onClick={handleUpload}>Upload</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
